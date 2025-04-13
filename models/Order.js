const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  writer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  subject: String,
  wordCount: Number,
  deadline: Date,
  status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
  files: [String],
  studentMessage: String,
  writerResponse: String
}, { timestamps: true });
module.exports = mongoose.model('Order', orderSchema);