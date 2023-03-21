const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send({ msg: "Hello world" });
});

const server = app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});

server.on("error", (error) => {
  console.log("Error en el servidor", error);
});
