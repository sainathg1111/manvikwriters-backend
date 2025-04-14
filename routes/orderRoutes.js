const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrdersByUser,
  getOrderById,
  getWriterOrders,
  assignWriterToOrder,
  updateOrderStatus,
} = require("../controllers/orderController");
const authMiddleware = require("../middleware/auth");

// 🔒 All routes below require authentication
router.use(authMiddleware);

// 📌 Routes
router.post("/", createOrder);                        // Create order
router.get("/", getOrdersByUser);                     // Get user orders
router.get("/writer", getWriterOrders);               // Get writer's orders
router.get("/:id", getOrderById);                     // Get order by ID
router.put("/:id/assign", assignWriterToOrder);       // ✅ Assign writer
router.put("/:id/status", updateOrderStatus);         // ✅ Update order status

module.exports = router;
