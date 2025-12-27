const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Project = require('./Project');

const Workspace = sequelize.define('Workspace', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  projectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Project.hasMany(Workspace, { foreignKey: 'projectId' });
Workspace.belongsTo(Project, { foreignKey: 'projectId' });

module.exports = Workspace;
