import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ClassSchedulingForm from './components/ClassSchedulingForm';
import PaymentForm from './components/PaymentForm';

const stripePromise = loadStripe('your-public-key-here');

function App() {
  return (
    <div className="App">
      <ClassSchedulingForm />
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
}

export default App;
