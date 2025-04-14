const express = require("express");
const router = express.Router();
const { createOrder, getOrdersByUser } = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createOrder);       // 🔐 Create new order (student)
router.get("/", protect, getOrdersByUser);    // 🔐 Get orders based on user role

module.exports = router;

