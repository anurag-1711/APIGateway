# API Gateway

This is a simple API Gateway implementation using Express and related middleware. The API Gateway acts as an intermediate layer between clients and microservices, providing routing, rate limiting, and authentication capabilities.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

## Features

- **Request Logging**: The API Gateway utilizes `morgan` middleware to log incoming requests and their corresponding responses.

- **Rate Limiting**: The API Gateway uses `express-rate-limit` middleware to implement rate limiting, allowing a maximum of 10 requests per minute per client.

- **Authentication and Authorization**: The API Gateway forwards requests to the `/bookingservice` path to a microservice after verifying the presence of a valid access token. It communicates with the authentication microservice on port 3001 to validate the access token.

- **Reverse Proxy**: The API Gateway uses `http-proxy-middleware` to proxy requests to the appropriate microservices.

## Prerequisites

Make sure you have the following dependencies installed:

- Node.js
- Express
- Morgan
- http-proxy-middleware
- express-rate-limit
- axios

## Getting Started

1. Clone the repository or download the source code.

2. Install the dependencies using the following command:

   ```bash
   npm install
   ```

3. Run the API Gateway using the following command:

   ```bash
   npm start
   ```

4. The API Gateway will be running on `http://localhost:3005`.

## Configuration

The API Gateway can be configured based on specific requirements. Some possible configuration options include:

- **Port**: The default port for the API Gateway is 3005. You can modify the `PORT` constant in the code to use a different port.

- **Rate Limit**: The rate limit can be adjusted by modifying the `windowMs` and `max` values in the `limiter` configuration.

- **Microservice Endpoints**: Update the URL in the `axios.get` call within the `/bookingservice` middleware to point to the appropriate authentication microservice endpoint.

## Usage

1. Access the API Gateway's endpoints:

- `/home`: A test endpoint that returns a JSON response with the message "OK". This endpoint doesn't require authentication or proxying.

- `/bookingservice/*`: Requests to paths starting with `/bookingservice` will be authenticated using the authentication microservice. If the authentication is successful, the requests will be proxied to the microservice running on port 3002.

2. To test the authentication functionality, include the `x-access-token` header in the request to `/bookingservice/*` endpoints.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## Acknowledgments

This API Gateway implementation was inspired by the need for an intermediate layer to route requests and provide necessary functionalities between clients and microservices.
