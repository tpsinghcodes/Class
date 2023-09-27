const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.use(express.json());

const notifications = [];

app.get("/api/notifications", (req, res) => {
  res.json(notifications);
});

app.get("/api/notifications/stream", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const sendNotification = (message) => {
    res.write(`data: ${JSON.stringify({ message })}\n\n`);
  };

  // Simulate real-time notifications (you can replace this with actual data)
  setInterval(() => {
    const newNotification = `New notification at ${new Date().toLocaleTimeString()}`;
    notifications.push(newNotification);
    sendNotification(newNotification);
  }, 5000); // Every 5 seconds, for example

  req.on("close", () => {
    // Clean up when the client disconnects
    res.end();
  });
});

const port = process.env.PORT || 3009;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
