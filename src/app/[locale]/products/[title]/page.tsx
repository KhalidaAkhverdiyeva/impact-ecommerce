"use client";
import RichTextSection from "@/components/Designers Rich Text Section/richTextSection";
import ExploreCollectionsSections from "@/components/Explore Collections Section/exploreCollectionsSection";
import Accordion from "@/components/FAQ Accardion/accardion";
import HomeDesignerGridSection from "@/components/Home Designer Grid Section/homeDesignerGrid";
import { Header } from "@/components/Layout/Header/header";
import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import ProductAboutSection from "@/components/Product About Section/productAboutSection";
import ProductDetailSwiper from "@/components/Product Detail Swiper/productDetailSwiper";
import ProductImageGrid from "@/components/Product Image Grid/productImageGrid";
import QuantityBlock from "@/components/Quantity Block/quantityBlock";
import Return from "@/components/Return/return";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import ProductDetailSkeleton from "@/components/Skeletons/Product Page Skeleton/productPageSkeleton";
import Stock from "@/components/Stock/stock";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Product, ProductDetailPageProps } from "@/types";
import { useCart } from "@/contexts/cartContext";
import AddToCartSidebar from "@/components/Add to Card Sidebar/addToCartSidebar";
import SuccessAlert from "@/components/Alert/SuccessAlert";
import { handleCheckout } from "@/utils/checkout";
import { Alert, Snackbar } from "@mui/material";

const ProductDetailPage: FC<ProductDetailPageProps> = ({ params }) => {
  const [product, setProduct] = useState<Product>();
  const [index, setIndex] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const searchParams = new URLSearchParams(url.search);
    const indexFromURL = searchParams.get("index");
    setIndex(indexFromURL ? parseInt(indexFromURL, 10) : null);
  }, []);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(
          `https://impact-server-side.onrender.com/api/products/${params.title}`
        );
        if (res.ok) {
          const data = await res.json();
          setProduct(data.product);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        console.log(err);
      }
    }

    if (params.title) {
      fetchProduct();
    }
  }, [params.title]);

  if (error) return <div className="text-red-500 p-4">{error}</div>;
  if (!product) return <ProductDetailSkeleton />;

  const selectedVariant = product.colorVariants[index ?? 0];

  const firstColorVariant = product.colorVariants?.[index ?? 0];
  const colorHex = firstColorVariant ? firstColorVariant.color : "#272727";

  const gatheredImages = [
    selectedVariant.mainImage,
    selectedVariant.hoverImage,
    ...selectedVariant.detailImages,
  ];
  const handleColorSelect = (index: number) => {
    setIndex(index);
  };

  const handleAddToCart = async () => {
    if (!product || !selectedVariant) return;

    try {
      await addToCart({
        _id: `${product._id}-${selectedVariant._id}`,
        productId: product._id,
        colorId: selectedVariant._id,
        quantity: quantity,
      });

      // Show success alert
      setShowAlert(true);

      // Wait for alert animation before showing cart
      setTimeout(() => {
        setIsCartOpen(true);
      }, 1000);
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

  const handleBuyNow = async () => {
    if (!product || !selectedVariant) return;

    setIsProcessing(true);
    try {
      await handleCheckout([
        {
          product,
          quantity,
          colorId: selectedVariant._id,
        },
      ]);
    } catch (error) {
      setCheckoutError(
        error instanceof Error ? error.message : "Checkout failed"
      );
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div>
      <Header transparent={false} />
      <div className="max-w-[1600px] mx-auto lg:px-[48px] lg:pt-[50px]">
        <div className="flex flex-col lg:flex-row gap-[40px]">
          {/* Left side - scrollable */}
          <div className="flex-[60%] overflow-y-auto">
            <ProductImageGrid gatheredImages={gatheredImages} />
            <div className="lg:hidden">
              <ProductDetailSwiper
                product={product}
                variantIndex={index ?? 0}
              />
            </div>
          </div>

          {/* Right side - fixed height, no scroll */}
          <div className="flex-[40%] sticky overflow-hidden top-[20px] h-fit px-[20px] md:px-[32px] lg:px-[0px]">
            {/* Product Info Section */}
            <div className="space-y-4">
              <p className="text-[#8a8989] md:text-[18px]">
                {product.designer}
              </p>
              <h1 className="text-[#272727] font-[800] text-[36px] md:text-[42px] lg:text-[50px]">
                {product.title}
              </h1>
            </div>

            {/* Price and Rating */}
            <div className="flex justify-between text-[#272727] py-4 border-b border-[#e4e4e4]">
              <p className="text-[20px]">${product.price.toFixed(2)}</p>
              <div className="flex items-center gap-[5px] md:mt-[4px]">
                <div className="text-[14px] md:text-[18px]">
                  {product.rating}
                </div>
                <svg
                  role="presentation"
                  fill="none"
                  focusable="false"
                  width="12"
                  height="12"
                  className="w-[20px] h-[20px]"
                  viewBox="0 0 15 15"
                >
                  <path
                    d="M7.5 0L9.58587 5.2731L15 5.72949L10.875 9.44483L12.1353 15L7.5 12.0231L2.86475 15L4.125 9.44483L0 5.72949L5.41414 5.2731L7.5 0Z"
                    fill="#FFB74A"
                  ></path>
                </svg>
              </div>
            </div>

            {/* Color Selection */}
            <div className="py-4">
              <p>
                <span className="text-[#8d8c8c] pr-[5px]">Colors:</span>
                {product.colors}
              </p>
              <div className="flex gap-2 mt-4">
                {product.colorVariants.map((variant, index) => (
                  <div
                    key={index}
                    onClick={() => handleColorSelect(index)}
                    className="w-[40px] h-[16px] cursor-pointer border"
                    style={{ backgroundColor: variant.color }}
                  ></div>
                ))}
              </div>
              <div className="relative mt-[4px] h-1">
                <div
                  className="absolute w-[40px] h-[2px] bg-black transition-all duration-300"
                  style={{ left: `${(index ?? 0) * 47}px` }}
                ></div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <QuantityBlock
                availableUnits={product.availableUnits}
                onQuantityChange={setQuantity}
              />
              <Stock product={product} />
              <div className="flex flex-col md:flex-row gap-[10px] py-[15px]">
                <button
                  onClick={handleAddToCart}
                  disabled={quantity > product.availableUnits}
                  aria-label="Add to cart"
                  className={`py-[16px] px-[32px] bg-[#3C619E] text-white font-[700] w-[100%] 
                    ${
                      quantity > product.availableUnits
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-[#2c4875]"
                    } 
                    transition-colors duration-300`}
                >
                  Add to cart ({quantity})
                </button>
                <button
                  onClick={handleBuyNow}
                  disabled={isProcessing || quantity > product.availableUnits}
                  aria-label="Buy it now"
                  className="bg-[#272727] font-[800] w-[100%] text-white px-[32px] py-[16px] hover:bg-[#404040] transition-colors duration-300 disabled:opacity-50"
                >
                  {isProcessing ? "Processing..." : "Buy it now"}
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <Return />

            {/* Accordion Section - Limited Height */}
            <div className="mt-6 mx-[-20px] h-fit">
              <Accordion
                title="Shipping & Returns"
                content="We are committed to bringing our products to everyone in the world. Our service delivers to most countries in the world and is dedicated to meeting a variety of shipping needs. Shipping is free for all orders over $100."
              />
              <Accordion
                title="Warranty"
                content="Every product is backed with a warranty. From design to manufacturing, delivery to service, we are committed to quality. We honor a 1-year warranty on all products. Brand-specific warranties may extend to longer periods."
              />
            </div>
          </div>
        </div>
      </div>
      <ProductAboutSection product={product} color={colorHex} />
      <FloatingTextSection
        text="Good design is everyones right"
        color={colorHex}
      />

      <div className=" h-[560px] lg:h-[960px]  relative overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source
            media="(min-width: 768px)"
            srcSet="https://impact-theme-home.myshopify.com/cdn/shop/files/HAY_MetteandRolf_Portrait.jpg?v=1656685244&width=1600"
          />
          <img
            src="https://impact-theme-home.myshopify.com/cdn/shop/files/HAY_MetteandRolf_Portrait_mobile.jpg?v=1656685248&width=800"
            alt="thomas"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
          <div className="flex flex-col gap-[10px] items-center text-[#272727]">
            <span className="text-white font-[800] text-[16px]  leading-[1] text-center max-w-[700px]">
              About us
            </span>
            <h2 className="text-white font-[800] text-[40px] md:text-[68px] lg:text-[80px] leading-[1] text-center max-w-[700px]">
              We do high-quality products
            </h2>
            <button
              aria-label="Learn more"
              className="text-[18px] whitespace-nowrap font-[700] mt-[10px] lg:py-[14px] py-[13px] px-[24px] lg:px-[32px] bg-white inline-block w-[160px] text-center "
            >
              Learn more
            </button>
          </div>
        </div>
      </div>

      <RichTextSection title="Meet the designers" />

      <div className="py-[100px]">
        <HomeDesignerGridSection />
      </div>

      <div className="bg-[#F2F2F2] py-[70px] lg:py-[100px]">
        <div className="flex flex-col lg:flex-row gap-[50px] max-w-[1600px] mx-auto px-[20px] md:px-[32px] lg:px-[48px]">
          <div className="flex-1 flex flex-col ">
            <p className="font-[700] text-[#272727]">FAQ</p>
            <h2 className="mt-[12px] lg:my-[30px] md:text-[40px] lg:text-[52px] mb-[20px] text-[#272727] text-[34px] leading-[1] font-[800]">
              Have a question ? We are here to help.
            </h2>
            <div className="flex flex-col gap-[10px] ">
              <div className="w-[160px]">
                <Image
                  src="https://impact-theme-home.myshopify.com/cdn/shop/files/team-fff.png?v=1660058616&width=320"
                  alt="Team"
                  width={320} // Set the width of the image
                  height={240} // Set the height based on the aspect ratio
                  className="w-full h-full"
                />
              </div>
              <p className=" text-[#272727] text-[14px] md:text-[16px]">
                Our customer support is available Monday to Friday: 8am-8:30pm.
              </p>
              <p className="text-[#272727B3] text-[14px] md:text-[16px]">
                Average answer time: 24h
              </p>
            </div>
          </div>
          <div className="flex-1 bg-white">
            <Accordion
              title="How do you calculate your shipping and handling charges?"
              content="We're dedicated to offering the best shipping methods available to ensure that your order reaches you quickly and safely. Shipping rates will vary, based on the specified delivery method, shipping address and total price of the merchandise in your cart."
            />
            <Accordion
              title="What if i recieved damaged or incorrect merchandise?"
              content="In the event that you receive defective, incorrect or incomplete merchandise, please contact us right away so we can make it right. For faster assistance with a return or exchange claim, please email us with your order number, contact information."
            />
            <Accordion
              title="What if my order is incomplete?"
              content="You're unable to add on further items to an order after purchase. If anything was missed, you'll need to contact us and we can cancel the order for you. You will then need to place a fresh order."
            />
            <Accordion
              isLast
              title="Any question?"
              content="You can contact us through our contact page. We will be happy to assist you."
            />
          </div>
        </div>
      </div>

      <ExploreCollectionsSections />
      <ShopifySection />
      <SuccessAlert
        open={showAlert}
        onClose={() => setShowAlert(false)}
        message={`Succesfuly added ${quantity} ${
          quantity > 1 ? "items" : "item"
        } to cart`}
      />
      <AddToCartSidebar
        isAddToCartOpen={isCartOpen}
        setIsAddCartOpen={setIsCartOpen}
      />
      <Snackbar
        open={!!checkoutError}
        autoHideDuration={6000}
        onClose={() => setCheckoutError(null)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="error"
          onClose={() => setCheckoutError(null)}
          sx={{
            backgroundColor: "#272727",
            color: "white",
            ".MuiAlert-icon": { color: "white" },
          }}
        >
          {checkoutError}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ProductDetailPage;
