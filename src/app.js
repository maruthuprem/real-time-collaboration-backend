const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./config/swagger');

const authRoutes = require('./auth/auth.routes');
const projectRoutes = require('./projects/project.routes');
const workspaceRoutes = require('./workspaces/workspace.routes');

const app = express();

/* -------------------- MIDDLEWARES -------------------- */
app.use(cors());
app.use(express.json());

/* -------------------- RATE LIMIT -------------------- */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

/* -------------------- ROUTES -------------------- */
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/workspaces', workspaceRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

/* -------------------- HEALTH CHECK -------------------- */
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

/* -------------------- ROOT -------------------- */
app.get('/', (req, res) => {
  res.send('API is running');
});

module.exports = app;
