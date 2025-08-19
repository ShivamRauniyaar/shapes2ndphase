import { SHAPES_API_URL } from "../../../Constant";
import { Fragment } from "react";
import ScrollAnimationComponent from "@/components/AnimatedComponents/SlowlyPopped";
import ProductCatalog from "@/components/v2Sections/ProductCollage";
import MultiLevelImageWithText from "@/components/v2Sections/MultiLevelImageWithText";
import ExploreRangeCmp from "@/components/v2Sections/ExploreRangeCmp";
import PartnerSection from "@/components/v2Sections/PartnerSection";
import ParallaxImage from "@/components/AnimatedComponents/ParallaxImage";
import TextWithAccordion from "@/components/v2Sections/textWithAccordion";
import ImageCatalog2nd from "@/components/v2Sections/Common/ImageCatalog2nd";
import ThinBgWithText from "@/components/v2Sections/ThinBgWithText";
import EnquiryForm from "@/components/v2Sections/contactSection";

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Fetch products on the server
async function getProducts(page: number) {
  const limit = 10;
  // Dummy data instead of API call
  const response = {
    json: async () => ({
      data: [
        { id: 1, name: "Product 1", description: "Description for product 1" },
        { id: 2, name: "Product 2", description: "Description for product 2" },
        { id: 3, name: "Product 3", description: "Description for product 3" },
        // Add more dummy products as needed
      ],
    }),
  };

  const productsData = (await response.json())?.data || [];

  return { productsData };
}

export default async function ShopPage({ searchParams }: Props) {
  const page = Number(searchParams?.page) || 1;

  return (
    <Fragment>
      {/* Hero Banner */}
      <div
        className="relative"
        style={{
          backgroundImage: `url(/images/newimages/productbanner2.png)`,
          width: "100%",
          height: "800px",
          backgroundSize: "auto", // Changed to 'contain'
          backgroundPosition: "center", // Center the image
          borderRadius: "12px",
          backgroundRepeat: "no-repeat",
          marginTop: "5rem",
        }}
      >
        <div className="absolute z-[102] top-[40%] left-[10%]">
          <h2 className="text-white">Shapes Cutlery</h2>
          <p className="mt-[1.5rem] text-white">
            Elevating Hospitality, One Table at a Time
          </p>
          <div className="flex gap-4 mt-[1.5rem]">
            <button className="transparent_secondary_button">
              Download Catalog
            </button>
            <div className="primary_button">Enquire Now</div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <ScrollAnimationComponent>
        <ProductCatalog />
      </ScrollAnimationComponent>

      <ScrollAnimationComponent>
        <MultiLevelImageWithText />
      </ScrollAnimationComponent>

      <ScrollAnimationComponent>
        <ExploreRangeCmp />
      </ScrollAnimationComponent>

      <ScrollAnimationComponent>
        <PartnerSection />
      </ScrollAnimationComponent>

      <ParallaxImage />

      <ScrollAnimationComponent>
        <TextWithAccordion />
      </ScrollAnimationComponent>

      <ScrollAnimationComponent>
        <ImageCatalog2nd />
      </ScrollAnimationComponent>

      <ThinBgWithText />

      <ScrollAnimationComponent>
        <EnquiryForm />
      </ScrollAnimationComponent>
    </Fragment>
  );
}
