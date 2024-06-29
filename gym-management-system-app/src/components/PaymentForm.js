import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentForm.css';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        setPaymentError(error.message);
        setPaymentSuccess(null);
      } else {
        setPaymentSuccess(paymentMethod);
        setPaymentError(null);
        console.log('PaymentMethod:', paymentMethod);
      }
    } catch (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <h2>Payment Information</h2>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {paymentError && <div>{paymentError}</div>}
      {paymentSuccess && <div>Payment successful!</div>}
      <button type='submit' disabled={!stripe}>
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;

