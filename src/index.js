const app = require('./app');
const http = require('http');
const { Server } = require('socket.io');

let server;

//  Only create server when NOT on Vercel
if (!process.env.VERCEL) {
  server = http.createServer(app);

  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('join-workspace', (workspaceId) => {
      socket.join(`workspace-${workspaceId}`);
    });

    socket.on('send-update', ({ workspaceId, data }) => {
      socket.to(`workspace-${workspaceId}`).emit('receive-update', data);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });

  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

//  Vercel needs ONLY the Express app
module.exports = app;
