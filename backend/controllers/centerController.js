const Centre = require("../models/Centre");

// Create a new centre
exports.createCentre = async (req, res) => {
  const { name, location, sports } = req.body;
  try {
    const centre = new Centre({ name, location, sports });
    await centre.save();
    res.status(201).json(centre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all centres
exports.getCentres = async (req, res) => {
  try {
    const centres = await Centre.find();
    res.json(centres);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
