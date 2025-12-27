const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Real-Time Collaboration API',
      version: '1.0.0',
      description: 'API documentation for Projects, Workspaces, and Auth',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./src/**/*.js'], // <-- look for JSDoc comments in your routes/controllers
};

const specs = swaggerJsdoc(options);
module.exports = specs;
