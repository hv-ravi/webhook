const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const events = []; // store webhook payloads

// Webhook endpoint
app.all("/webhook", (req, res) => {
  const data = {
    method: req.method,
    headers: req.headers,
    body: req.body,
    time: new Date(),
  };
  events.push(data);
  console.log("📩 Webhook received:", data);
  res.json({ status: data });
});

// Fetch all events (for frontend)
app.get("/events", (req, res) => {
  res.json(events);
});

// Start server
app.listen(3000, () => {
  console.log("🚀 Backend running at http://localhost:3000");
});
