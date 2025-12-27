const express = require('express');
const router = express.Router();
const controller = require('./project.controller');
const auth = require('../middlewares/auth.middleware');

/**
 * @swagger
 * /api/projects:
 *   post:
 *     summary: Create a new project (Owner only)
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               ownerEmail:
 *                 type: string
 *     responses:
 *       201:
 *         description: Project created successfully
 */
router.post('/', auth(['Owner']), controller.createProject);

/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Get all projects (any logged-in user)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of projects
 */
router.get('/', auth(), controller.getProjects);

/**
 * @swagger
 * /api/projects/{id}:
 *   get:
 *     summary: Get project by ID (any logged-in user)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Project details
 */
router.get('/:id', auth(), controller.getProjectById);

/**
 * @swagger
 * /api/projects/{id}:
 *   put:
 *     summary: Update a project (Owner only)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Project updated successfully
 */
router.put('/:id', auth(['Owner']), controller.updateProject);

/**
 * @swagger
 * /api/projects/{id}:
 *   delete:
 *     summary: Delete a project (Owner only)
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Project deleted successfully
 */
router.delete('/:id', auth(['Owner']), controller.deleteProject);

module.exports = router;
