const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello from Express</h1>");
});

app.listen(PORT, () => {
  console.log(`web server listening on PORT: ${PORT}`);
});
