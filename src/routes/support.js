const express = require("express");
const router = express.Router();

// Dummy support endpoint (Beckn-compliant placeholder)
router.post("/support", async (req, res) => {
  return res.json({
    context: req.body.context,
    message: {
      support: {
        status: "open",
        contact: {
          email: "support@yourdomain.com",
          phone: "+91-9876543210"
        }
      }
    }
  });
});

module.exports = router;
