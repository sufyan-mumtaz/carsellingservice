const express = require("express");
const { submitVehicleInfo } = require("../controllers/vehicle");
const upload = require("../config/s3");
const { body } = require("express-validator");
const authMiddleware = require("../middleware/auth");
const router = express.Router();
router.post(
  "/",
  authMiddleware,
  upload.array("images", 10),
  [
    body("carModel")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Car model must be at least 3 characters long"),
    body("price").isNumeric().withMessage("Price must be a valid number"),
    body("phone")
      .matches(/^01[0-9]{9}$/)
      .withMessage("Phone number must be valid (e.g., 01123456789)"),
    body("city").isString().withMessage("City is required"),
    body("numberOfCopies")
      .isInt({ min: 1, max: 10 })
      .withMessage("Number of copies must be between 1 and 10"),
  ],
  submitVehicleInfo
);

module.exports = router;
