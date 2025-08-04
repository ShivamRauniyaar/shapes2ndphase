import React from "react";
import Inner from "@/components/PageTransition/inner";
import ShopBreadCrumbImg from "@/components/Shop/ShopBreadCrumbImg";
import { SHAPES_API_URL } from "../../../Constant";
interface CatalogueProductsProps {
  searchParams: {
    catalogueid?: string;
    categoryName?: string;
  };
}

async function getProducts(catalogueId?: string) {
  if (!catalogueId) return [];

  try {
    const res = await fetch(
      `${SHAPES_API_URL}getproductsbycategory/${catalogueId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store", // Ensures fresh data on each request
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}

const CatalogueProducts = async ({ searchParams }: CatalogueProductsProps) => {
  const catalogueId = searchParams?.catalogueid || "";
  const categoryName = searchParams?.categoryName || "Products";

  const productsData = await getProducts(catalogueId);

  return (
    <React.Fragment>
      <Inner backgroundColor="#EA2127" />
      <div id="header" className="relative w-full">
        {/* <MenuOne props="bg-white" /> */}
      </div>
      <ShopBreadCrumbImg
        data={productsData}
        fetchedProduct={productsData}
        productPerPage={12}
        dataType={""}
        headerName={categoryName}
        category={""}
      />
    </React.Fragment>
  );
};

export default CatalogueProducts;
