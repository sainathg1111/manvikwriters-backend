const express = require('express');
const router = express.Router();
const { example } = require('../controllers/messageController');
router.get('/', example);
module.exports = router;