const express = require('express');
const router = express.Router();
const controller = require('./workspace.controller');
const auth = require('../middlewares/auth.middleware');

// Create workspace → Owner only
router.post('/', auth(['Owner']), controller.createWorkspace);

// Get all workspaces → any logged-in user
router.get('/', auth(), controller.getWorkspaces);

// Get workspace by ID → any logged-in user
router.get('/:id', auth(), controller.getWorkspaceById);

// Update workspace → Owner only
router.put('/:id', auth(['Owner']), controller.updateWorkspace);

// Delete workspace → Owner only
router.delete('/:id', auth(['Owner']), controller.deleteWorkspace);

// Invite collaborator → Owner only
router.post('/:id/invite', auth(['Owner']), controller.inviteCollaborator);

module.exports = router;
