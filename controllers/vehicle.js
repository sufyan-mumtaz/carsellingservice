const Vehicle = require("../models/vehicle");
const submitVehicleInfo = async (req, res) => {
  try {
    const { carModel, price, phone, numberOfCopies, userId, city } = req.body;

    // Retrieve image URLs from S3 upload
    const imageUrls = req.files.map((file) => file.location);
    console.log(imageUrls);
    // Save vehicle data to the database
    const newVehicle = new Vehicle({
      userId,
      carModel,
      city,
      price,
      phone,
      numberOfCopies,
      imageUrls,
    });

    await newVehicle.save();

    res.status(200).json({
      message: "Vehicle information submitted successfully",
      vehicle: newVehicle,
    });
  } catch (error) {
    console.error("Error submitting vehicle information:", error);
    res.status(500).json({
      message: "Failed to submit vehicle information",
      error: error.message,
    });
  }
};

module.exports = {
  submitVehicleInfo,
};
