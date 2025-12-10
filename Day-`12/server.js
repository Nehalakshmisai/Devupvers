const http = require("http");

let storedUser = null; 

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  //Get
  if (req.method === "GET" && req.url === "/hello") {
    res.writeHead(200);
    return res.end(JSON.stringify({ message: "Hello from Node.js server" }));
  }

  // Post
  if (req.method === "POST" && req.url === "/user") {
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);      
        storedUser = data;                 
        res.writeHead(201);
        res.end(JSON.stringify({ status: "User saved", data }));
      } catch {
        res.writeHead(400);
        res.end(JSON.stringify({ error: "Invalid JSON input" }));
      }
    });

    return;
  }

  // GET 
  if (req.method === "GET" && req.url === "/user") {
    if (!storedUser) {
      res.writeHead(404);
      return res.end(JSON.stringify({ error: "No user stored" }));
    }

    res.writeHead(200);
    return res.end(JSON.stringify(storedUser));
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "Route not found" }));
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
