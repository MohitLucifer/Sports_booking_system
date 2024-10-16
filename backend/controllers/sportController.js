const Sport = require("../models/Sport.js");

// Create a new sport
exports.createSport = async (req, res) => {
  const { name } = req.body;
  try {
    const sport = new Sport({ name });
    await sport.save();
    res.status(201).json(sport);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all sports
exports.getSports = async (req, res) => {
  try {
    const sports = await Sport.find();
    res.json(sports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
