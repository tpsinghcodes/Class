const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A client connected");

  // Send a welcome message to the connected client
  socket.emit("message", "Welcome to the WebSocket server!");

  // Handle client disconnection
  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});

setInterval(() => {
  const message = `Message from server at ${new Date().toLocaleTimeString()}`;
  io.emit("message", message); // Emit to all connected clients
}, 5000);

const port = process.env.PORT || 3009;
server.listen(port, () => {
  console.log(`WebSocket server is listening on port ${port}`);
});
