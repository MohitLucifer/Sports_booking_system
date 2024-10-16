const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  centre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Centre",
    required: true,
  },
  sport: { type: String, required: true },
  court: { type: Number, required: true },
  customerName: { type: String, required: true },
  date: { type: Date, required: true },
  timeSlot: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);
