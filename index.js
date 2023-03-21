const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).send({ msg: "Hello world" });
});

app.get("/suma", (req, res) => {
    const {num1, num2} = req.query;
    const sum = parseInt(num1) + parseInt(num2);
    res.status(200).send({msg: `El resultado de la suma es ${sum}.`})
})

const server = app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});

server.on("error", (error) => {
  console.log("Error en el servidor", error);
});
