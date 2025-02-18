// pages/success.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";

const Success = () => {
  const router = useRouter();

  useEffect(() => {
    // Extract the session_id from the query string
    const { session_id } = router.query;

    if (session_id) {
      // Optionally, make an API call to your backend to verify the session
      console.log(`Session ID received: ${session_id}`);
      // You can perform further actions such as saving the session ID to the user or verifying the session with Stripe
    }
  }, [router.query]);

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>
        Your payment has been processed successfully. Thank you for your
        purchase!
      </p>
    </div>
  );
};

export default Success;
