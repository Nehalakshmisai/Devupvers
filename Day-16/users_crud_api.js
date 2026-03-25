

const express = require("express");

const app = express();
const PORT = 3003;

app.use(express.json());

// In-memory data (simple example; no database)
let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];
let nextId = 3;

// GET /users -> list all users (200)
app.get("/users", (req, res) => {
  res.status(200).json(users);
});

// GET /users/:id -> get one user (200 / 404)
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json(user);
});

// POST /users -> create user (201 / 400)
app.post("/users", (req, res) => {
  const { name, email } = req.body || {};

  if (!name || !email) {
    return res
      .status(400)
      .json({ message: "name and email are required fields" });
  }

  const newUser = { id: nextId++, name, email };
  users.push(newUser);

  return res.status(201).json(newUser);
});

// PUT /users/:id -> update user (200 / 400 / 404)
app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const { name, email } = req.body || {};
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  if (!name || !email) {
    return res
      .status(400)
      .json({ message: "name and email are required fields" });
  }

  users[index] = { id, name, email };
  return res.status(200).json(users[index]);
});

// DELETE /users/:id -> delete user (204 / 404)
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);
  return res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Users CRUD API running at http://localhost:${PORT}`);
});

