const express = require("express");
const { createSport, getSports } = require("../controllers/sportController");
const { authenticate } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authenticate, createSport);
router.get("/", authenticate, getSports);

module.exports = router;
