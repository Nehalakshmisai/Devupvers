const express = require("express");

const app = express();
const PORT = 3001;

// Built-in middleware: parse JSON bodies
app.use(express.json());

// Custom logging middleware (records method, URL, status, and duration)
function requestLogger(req, res, next) {
  const start = Date.now();

  res.on("finish", () => {
    const ms = Date.now() - start;
    console.log(
      `${req.method} ${req.originalUrl} -> ${res.statusCode} (${ms}ms)`
    );
  });

  next();
}

app.use(requestLogger);

// Custom authentication middleware
// Expects: Authorization: Bearer <token>
const DEMO_TOKEN = "secret123";

function authenticate(req, res, next) {
  const auth = req.headers.authorization || "";

  if (!auth.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: missing token" });
  }

  const token = auth.slice("Bearer ".length);

  if (token !== DEMO_TOKEN) {
    return res.status(403).json({ message: "Forbidden: invalid token" });
  }

  // Attach a "user" object for downstream handlers
  req.user = { id: 1, name: "Demo User" };
  next();
}

// Routes
app.get("/public", (req, res) => {
  res.json({ message: "This route is public" });
});

app.get("/private", authenticate, (req, res) => {
  res.json({ message: `Welcome, ${req.user.name}!`, user: req.user });
});

// Simple "login" endpoint for demonstration (doesn't create real sessions)
app.post("/login", (req, res) => {
  const { token } = req.body || {};
  if (token === DEMO_TOKEN) {
    return res.json({ message: "Login successful (use token as Bearer)" });
  }
  return res.status(401).json({ message: "Invalid token" });
});

app.listen(PORT, () => {
  console.log(`Middleware example running at http://localhost:${PORT}`);
});

