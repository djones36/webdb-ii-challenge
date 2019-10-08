const express = require("express");

const server = express();
const carRoutes = require("../routes/carRoutes");
server.use(express.json());

server.use("/api/cars", carRoutes);

server.get("/", (req, res) => {
  res.status(200).json("Successful Deployment");
});

module.exports = server;
