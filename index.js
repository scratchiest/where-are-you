const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.send().status(200);
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}.`));

// Socket activities
io.on('connection', function (socket) {
  console.log(`Welcome, socket ${socket.id}.`);
});