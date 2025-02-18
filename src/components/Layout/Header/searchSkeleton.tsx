const ProductSkeleton = () => {
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="relative w-[96px] h-[125px] bg-gray-200 animate-pulse rounded-[3px]" />
      <div className="flex-1">
        <div className="h-3 w-16 bg-gray-200 animate-pulse mb-2 rounded-[3px]" />
        <div className="h-6 w-48 bg-gray-200 animate-pulse mb-2 rounded-[3px]" />
        <div className="h-4 w-20 bg-gray-200 animate-pulse rounded-[3px]" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
