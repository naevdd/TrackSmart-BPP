const express = require("express");
const router = express.Router();
const trackingService = require("../services/trackingService");

router.post("/", async (req, res) => {
  try {
    const response = await trackingService.handleTrack(req.body);
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;