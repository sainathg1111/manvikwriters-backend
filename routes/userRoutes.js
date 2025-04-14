const express = require("express");
const router = express.Router();

// 🧪 Test Route - Just to verify API is working
router.get("/test", (req, res) => {
  res.status(200).json({ message: "User route is working 🚀" });
});

module.exports = router;
