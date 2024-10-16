const Booking = require("../models/Booking");
const Centre = require("../models/Centre");

// Create a new booking
exports.createBooking = async (req, res) => {
  const { centre, sport, court, customerName, date, timeSlot } = req.body;

  try {
    const existingBooking = await Booking.findOne({
      centre,
      sport,
      court,
      date,
      timeSlot,
    });
    if (existingBooking) {
      return res.status(400).json({ message: "Time slot already booked" });
    }

    const booking = new Booking({
      centre,
      sport,
      court,
      customerName,
      date,
      timeSlot,
    });
    await booking.save();
    res.status(201).json({ message: "Booking created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get bookings by Centre, Sport, and Date
exports.getBookings = async (req, res) => {
  const { centerId, sportId, date } = req.query;

  try {
    const bookings = await Booking.find({
      centre: centerId,
      sport: sportId,
      date: new Date(date).setHours(0, 0, 0, 0),
    });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
