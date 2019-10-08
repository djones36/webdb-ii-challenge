const express = require("express");

const server = express();
const carsAPI = require("../API/carsAPI");
const carRoutes = require("../routes/carRoutes");
server.use(express.json());

server.use("/api/cars", carRoutes);

server.use("/api, carsAPI");

module.exports = server;
