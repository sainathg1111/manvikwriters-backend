const Order = require('../models/Order');

// @desc    Create a new order
// @route   POST /api/orders
// @access  Private (only students can create orders)
exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order({ ...req.body, student: req.user.id });
    const saved = await newOrder.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Get orders by user (student or writer)
// @route   GET /api/orders
// @access  Private (only students or writers can see their orders)
exports.getOrdersByUser = async (req, res) => {
  try {
    const filter = req.user.role === 'writer' ? { writer: req.user.id } : { student: req.user.id };
    const orders = await Order.find(filter).populate('writer student', 'name email');
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Get order details by ID
// @route   GET /api/orders/:id
// @access  Private (only students and writers can access order details)
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('writer student', 'name email');
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

