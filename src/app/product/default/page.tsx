import React from "react";
import BreadcrumbProduct from "@/components/Breadcrumb/BreadcrumbProduct";
import Default from "@/components/Product/Detail/Default";
import productData from "@/data/Product.json";
import type { Metadata } from "next";
import { SHAPES_API_URL } from "../../../../Constant";

interface ProductProps {
  searchParams: { id?: string };
}

async function fetchProductData(productId: string) {
  try {
    const res = await fetch(`${SHAPES_API_URL}getproduct/${productId}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch product data");

    const data = await res.json();
    let data2;

    if (data?.data?.isVariants) {
      const res2 = await fetch(`${SHAPES_API_URL}getvariantdata/${productId}`, {
        cache: "no-store",
      });
      data2 = await res2.json(); // <-- await here is crucial
    }

    if (data?.data && data2) {
      return { ProductsData: data.data, VariantsData: data2 };
    } else {
      return { ProductsData: data.data, VariantsData: null };
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export async function generateMetadata({
  searchParams,
}: ProductProps): Promise<Metadata> {
  const productId = searchParams?.id || "1";
  const productDetails = await fetchProductData(productId);

  return {
    title: `${productDetails?.ProductsData?.productName}`,
    description: productDetails?.ProductsData?.productDescription,
    icons: {
      icon: "/favicon.png",
    },
    openGraph: {
      title: `${productDetails?.ProductsData?.productName} - Shapes Product Ltd.`,
      description: productDetails?.ProductsData?.productDescription,
      images: [
        {
          url: productDetails?.ProductsData?.productImages?.[0],
          width: 1200,
          height: 630,
          alt: `${productDetails?.ProductsData?.productName} Collection`,
        },
      ],
      type: "website",
    },
  };
}

const ProductDefault = async ({ searchParams }: ProductProps) => {
  const productId = searchParams?.id || "1";
  const productDetails = await fetchProductData(productId);
  return (
    <>
      <div id="header" className="relative w-full">
        <BreadcrumbProduct
          data={productData.map(product => ({
            ...product,
            thumbImage: Array.isArray(product.thumbImage) ? product.thumbImage[0] : product.thumbImage,
          }))}
          productPage="default"
          productId={productId}
          parentData={productDetails?.ProductsData}
        />
      </div>
      <Default
        data={productDetails}
        productId={productId}
        parentProductData={productDetails?.ProductsData}
      />
    </>
  );
};

export default ProductDefault;
