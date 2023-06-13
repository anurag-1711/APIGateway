const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
const rateLimit = require("express-rate-limit");
const axios = require("axios");

const app = express();

const PORT = 3005;

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 minutes
    max: 10, // maximum of 100 requests
    message: 'Too many requests, please try again later.',
});


app.use(morgan("combined"));
app.use(limiter);
app.use("/bookingservice", async (req, res, next) => {
    console.log(req.headers['x-access-token']);

    try {
        const response = await axios.get('http://localhost:3001/api/v1/isAuthenticated', {
            headers: {
                'x-access-token': req.headers['x-access-token']
            }
        });
        console.log(response.data);
        if (response.data.success) {
            next();
        } else {
            return res.status(401).json({ message: "Unauthorized" });
        }
    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
    // next();
})
app.use('/bookingservice', createProxyMiddleware({ target: 'http://localhost:3002/', changeOrigin: true }));
app.get("/home", (req, res) => {
    res.json({ message: "OK" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});