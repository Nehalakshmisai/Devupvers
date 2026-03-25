const express = require("express");
const pagesRoutes = require("./routes/pagesRoutes");

const app = express();
const PORT = 3002;

// Built-in middleware
app.use(express.json());

// Mount routes from routes folder
app.use(pagesRoutes);

app.get("/", (req, res) => {
  res.send("App is running. Try /home, /about, /contact");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`App running at http://localhost:${PORT}`);
});

