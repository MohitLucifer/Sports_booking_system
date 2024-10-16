const mongoose = require("mongoose");

const courtSchema = new mongoose.Schema({
  centre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Centre",
    required: true,
  },
  sport: { type: String, required: true },
  courtNumber: { type: Number, required: true },
  status: {
    type: String,
    enum: ["available", "under maintenance"],
    default: "available",
  },
});

module.exports = mongoose.model("Court", courtSchema);
