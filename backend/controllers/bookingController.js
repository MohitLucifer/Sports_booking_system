const Booking = require("../models/Booking");
const Center = require("../models/Center");

const getBookingsByCentreSportDate = async (req, res) => {
  const { centerId, sportId, date } = req.query;

  try {
    const bookings = await Booking.find({
      center: centerId,
      sport: sportId,
      date: new Date(date),
    });

    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createBooking = async (req, res) => {
  const { center, sport, court, customerName, date, timeSlot } = req.body;

  try {
    const existingBooking = await Booking.findOne({
      center,
      sport,
      court,
      date,
      timeSlot,
    });
    if (existingBooking)
      return res
        .status(400)
        .json({ error: "This time slot is already booked." });

    const newBooking = new Booking({
      center,
      sport,
      court,
      customerName,
      date,
      timeSlot,
    });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getBookingsByCentreSportDate, createBooking };
