// routes/authRoutes.js
const express = require("express");
const { login } = require("../controllers/auth");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({ message: "Server is working" });
});
router.post("/login", login);

module.exports = router;
