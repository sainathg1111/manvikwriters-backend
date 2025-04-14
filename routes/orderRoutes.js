const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrdersByUser,
  getOrderById,
  getWriterOrders,
} = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");

// 🧾 Create new order (students only)
router.post("/", protect, createOrder);

// 📦 Get all orders for the logged-in user (student or writer)
router.get("/", protect, getOrdersByUser);

// 📄 Get details of a specific order
router.get("/:id", protect, getOrderById);

// ✍️ Get orders assigned to the writer
router.get("/writer/orders", protect, getWriterOrders);

module.exports = router;
