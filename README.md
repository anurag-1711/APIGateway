# API GATEWAY

## Description

This is a simple API Gateway that routes requests to the appropriate microservice.

FRONTEND - MIDDLE-END - BACKEND

- We need an intermediate layer between the client side and the microservices. 
- Using the middle-end, when the client makes a request, it will be redirected to the appropriate microservice. 
- The middle-end will be the only one that knows the microservices.
- We can use the middle-end to implement message validation, response transformation, rate limiting etc.
- API Gateway acts as this middle-end layer.
