import { getStripe } from './stripe';
import { Product } from '@/types';

interface CheckoutItem {
  product: Product;
  quantity: number;
  colorId: string;
}

export const handleCheckout = async (items: CheckoutItem[]) => {
  try {
    const stripe = await getStripe();

    if (!stripe) {
      throw new Error('Failed to initialize payment system');
    }

    // Format cart items for Stripe
    const lineItems = items.map((item) => ({
      price_data: {
        currency: 'usd',
        unit_amount: Math.round(item.product.price * 100),
        product_data: {
          name: item.product.title,
          images: [
            item.product.colorVariants.find(
              (variant) => variant._id === item.colorId
            )?.mainImage || '',
          ],
        },
      },
      quantity: item.quantity,
    }));

    const response = await fetch('https://impact-server-side.onrender.com/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: lineItems }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Checkout failed');
    }

    const { id: sessionId } = await response.json();
    const { error: redirectError } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (redirectError) {
      throw new Error(redirectError.message);
    }

  } catch (err) {
    console.error('Checkout error:', err);
    throw err;
  }
};
