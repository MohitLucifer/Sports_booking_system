const express = require("express");
const {
  createBooking,
  getBookings,
} = require("../controllers/bookingController");
const { authenticate } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authenticate, createBooking);
router.get("/byCentreSportDate", authenticate, getBookings);

module.exports = router;
