const express = require('express');
const router = express.Router();
const { createOrder, getOrdersByUser } = require('../controllers/orderController');
const auth = require('../middlewares/authMiddleware');
router.post('/', auth, createOrder);
router.get('/', auth, getOrdersByUser);
module.exports = router;