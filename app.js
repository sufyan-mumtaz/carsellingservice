// app.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const vehicleRoutes = require("./routes/vehicle");

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api/vehicle", vehicleRoutes);

module.exports = app;
