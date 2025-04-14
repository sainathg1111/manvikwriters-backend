const Order = require("../models/Order");

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
// @access  Private
exports.getOrdersByUser = async (req, res) => {
  try {
    const filter = req.user.role === 'writer'
      ? { assignedWriter: req.user.id }
      : { student: req.user.id };

    const orders = await Order.find(filter).populate('assignedWriter student', 'name email');
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Get order details by ID
// @route   GET /api/orders/:id
// @access  Private
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('assignedWriter student', 'name email');
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Get all orders assigned to the writer
// @route   GET /api/orders/writer
// @access  Private
exports.getWriterOrders = async (req, res) => {
  try {
    const orders = await Order.find({ assignedWriter: req.user.id }).populate('student', 'name email');
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Step to assign writer to an order
// @route   PUT /api/orders/:id/assign
// @access  Admin or authorized student
exports.assignWriterToOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.assignedWriter = req.body.writerId;
    const updatedOrder = await order.save();

    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Step to update order status
// @route   PUT /api/orders/:id/status
// @access  Writer/Admin
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status;
    const updatedOrder = await order.save();

    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
