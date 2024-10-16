const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  center: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Center",
    required: true,
  },
  sport: { type: String, required: true },
  court: { type: Number, required: true },
  customerName: { type: String, required: true },
  date: { type: Date, required: true },
  timeSlot: { type: String, required: true },
});

module.exports = mongoose.model("Booking", bookingSchema);
