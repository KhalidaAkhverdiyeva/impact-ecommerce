import { Header } from "@/components/Layout/Header/header";
import Image from "next/image";

const Success = () => {
  return (
    <>
      <Header transparent={false} />
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-6">
          <Image
            src="/images/success.png"
            alt="success"
            width={100}
            height={100}
            className="mx-auto"
          />
          <p className="text-2xl font-semibold text-gray-800 max-w-md">
            Your payment has been processed successfully. Thank you for your
            purchase!
          </p>
        </div>
      </div>
    </>
  );
};

export default Success;
