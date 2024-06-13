// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('comment', (msg) => {
    console.log('comment: ' + msg);
    io.emit('comment', msg);
  });
});
server.listen(port, () => {
  console.log('Server listening at port %d', port);
});