const express = require("express");
const app = express();
const socketIo = require("socket.io");
const port = 3000;
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("message", (data) => {
    console.log("Message received: ", data);
    io.emit("message", data);
  });
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

app.get("/", (req, res) => res.send("Hello World!"));
server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
