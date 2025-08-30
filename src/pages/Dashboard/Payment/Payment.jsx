import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

// Use the publishable key from your .env file
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default Payment;
