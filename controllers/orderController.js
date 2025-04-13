const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order({ ...req.body, student: req.user.id });
    const saved = await newOrder.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrdersByUser = async (req, res) => {
  try {
    const filter = req.user.role === 'writer' ? { writer: req.user.id } : { student: req.user.id };
    const orders = await Order.find(filter).populate('writer student', 'name email');
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};