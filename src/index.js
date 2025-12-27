const app = require('./app');
const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// Socket connection
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join-workspace', (workspaceId) => {
    socket.join(`workspace-${workspaceId}`);
    console.log(`Joined workspace ${workspaceId}`);
  });

  socket.on('send-update', ({ workspaceId, data }) => {
    socket.to(`workspace-${workspaceId}`).emit('receive-update', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// ✅ Only start server if NOT running tests
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// ✅ Export for testing
module.exports = { app, server };
