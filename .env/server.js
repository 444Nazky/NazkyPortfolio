// server.js
require("dotenv").config();
const express = require("express");
const path = require("path");
const compression = require("compression");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, "public");


app.use(morgan("dev"));

app.use(compression());


app.use(express.static(PUBLIC_DIR, {
  maxAge: "1d", 
  etag: true
}));


app.get("/", (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, "index.html"));
});


app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the API!" });
});


app.use((req, res, next) => {
  res.status(404).sendFile(path.join(PUBLIC_DIR, "404.html"));
});


app.use((err, req, res, next) => {
  console.error("Server error:", err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
