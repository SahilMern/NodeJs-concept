const express = require("express");
const app = express();
const port = 3000;
const http = require("http");
const socketIo = require("socket.io");
const server = http.createServer(app); // Corrected here
const io = socketIo(server);

io.on("connection", (socket) => {
    console.log(socket.id, "socketId"); // socket.id to log the ID of the connected socket
});

app.get("/", (req, res) => res.send("Hello World!"));

server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
