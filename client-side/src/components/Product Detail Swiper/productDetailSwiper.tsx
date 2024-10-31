import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Product } from "@/types/productCardTypes";
import Image from "next/image";

interface ProductDetailSwiperProps {
  product: Product;
  variantIndex: number;
}

const ProductDetailSwiper: React.FC<ProductDetailSwiperProps> = ({
  product,
  variantIndex,
}) => {
  const variant = product.colorVariants[variantIndex];
  if (!variant) return null;

  const variantImages = [
    variant.mainImage,
    variant.hoverImage,
    ...variant.detailImages,
  ];

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={5}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="w-full max-w-lg mx-auto"
    >
      {variantImages.map((image, index) => (
        <SwiperSlide
          key={index}
          className="flex items-center justify-center h-64 bg-gray-100 text-white text-xl font-semibold"
        >
          <Image
            src={image}
            alt={`Product Image ${index + 1}`}
            className="w-full h-full object-cover"
            width={1200}
            height={1200}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductDetailSwiper;
