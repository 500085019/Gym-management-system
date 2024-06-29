
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Payment = require('../models/Payment');

exports.processPayment = async (req, res) => {
  const { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      description: 'Gym Membership',
      payment_method: id,
      confirm: true,
    });

    const newPayment = new Payment({
      amount,
      id: payment.id,
      status: payment.status,
    });

    await newPayment.save();

    res.json({ message: 'Payment successful', success: true });
  } catch (error) {
    res.json({ message: 'Payment failed', success: false });
  }
};
