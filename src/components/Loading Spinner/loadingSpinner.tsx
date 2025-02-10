"use client";
import { useMinimumLoadingTime } from "@/hooks/useMinimumLoadingTime";

const LoadingSpinner = () => {
  const isLoading = useMinimumLoadingTime();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-100 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#272727]"></div>
    </div>
  );
};

export default LoadingSpinner;
