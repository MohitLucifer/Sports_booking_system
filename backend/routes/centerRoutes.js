const express = require("express");
const { createCentre, getCentres } = require("../controllers/centerController");
const { authenticate } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authenticate, createCentre);
router.get("/", authenticate, getCentres);

module.exports = router;
