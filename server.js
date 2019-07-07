const express = require('express');

const app = express();
const http = require('http').Server(app);

const port = 5000;
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  socket.broadcast.emit('new_connection', { message: 'A new user has connected', id: socket.id });
  socket.on('send_message', message => io.emit('receive_message', message));
  socket.on('disconnect', () => console.log('user disconnected'));
});

http.listen(port, () => console.log(`Listening on port: ${port}`));
