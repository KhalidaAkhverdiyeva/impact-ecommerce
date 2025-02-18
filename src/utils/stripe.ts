import { loadStripe } from '@stripe/stripe-js';

// Make sure to add your publishable key in your .env.local file
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export const getStripe = () => {
  return stripePromise;
};
