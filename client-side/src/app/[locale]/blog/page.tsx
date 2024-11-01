import ExploreCollectionsSections from "@/components/Explore Collections Section/exploreCollectionsSection";
import FloatingTextSection from "@/components/Marquee Text/floatingTexts";
import ShopifySection from "@/components/Shopify Section/shopifySection";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <ExploreCollectionsSections />
      <FloatingTextSection
        text="Good design is everyone's right."
        color="#3C619E"
      />
      <ShopifySection />
    </div>
  );
};

export default BlogPage;
