const Workspace = require('../models/Workspace');

// Create Workspace
exports.createWorkspace = async (req, res) => {
  try {
    const { name, projectId } = req.body;
    const workspace = await Workspace.create({ name, projectId });
    res.status(201).json(workspace);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all Workspaces
exports.getWorkspaces = async (req, res) => {
  try {
    const workspaces = await Workspace.findAll();
    res.json(workspaces);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get Workspace by ID
exports.getWorkspaceById = async (req, res) => {
  try {
    const workspace = await Workspace.findByPk(req.params.id);
    if (!workspace) return res.status(404).json({ message: 'Workspace not found' });
    res.json(workspace);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Workspace
exports.updateWorkspace = async (req, res) => {
  try {
    const workspace = await Workspace.findByPk(req.params.id);
    if (!workspace) return res.status(404).json({ message: 'Workspace not found' });

    await workspace.update(req.body);
    res.json(workspace);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete Workspace
exports.deleteWorkspace = async (req, res) => {
  try {
    const workspace = await Workspace.findByPk(req.params.id);
    if (!workspace) return res.status(404).json({ message: 'Workspace not found' });

    await workspace.destroy();
    res.json({ message: 'Workspace deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.inviteCollaborator = async (req, res) => {
  const workspaceId = req.params.id;
  const { email } = req.body;

  // Mocked response — you can log or save to DB later
  console.log(`Invite sent to ${email} for workspace ${workspaceId}`);

  res.status(200).json({ message: `Invite sent to ${email} for workspace ${workspaceId}` });
};

