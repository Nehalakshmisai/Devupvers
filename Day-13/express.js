const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Simple request logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.get("/home", (req, res) => {
  res.send("Welcome to the Home page");
});

app.get("/about", (req, res) => {
  res.send("About us: This is a simple Express.js example.");
});

app.get("/contact", (req, res) => {
  res.send("Contact us at: contact@example.com");
});

// Default route
app.get("/", (req, res) => {
  res.send("Server is running. Try /home, /about, or /contact");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
