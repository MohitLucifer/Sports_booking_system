const mongoose = require("mongoose");

const centreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  sports: [
    {
      sport: { type: String, required: true },
      courts: { type: Number, required: true, min: 1 },
    },
  ],
});

module.exports = mongoose.model("Centre", centreSchema);
