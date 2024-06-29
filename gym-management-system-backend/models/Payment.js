const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Payment', PaymentSchema);

