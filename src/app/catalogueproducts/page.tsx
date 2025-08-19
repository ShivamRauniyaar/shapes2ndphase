import React from "react";
import Inner from "@/components/PageTransition/inner";
import ShopBreadCrumbImg from "@/components/Shop/ShopBreadCrumbImg";
import { SHAPES_API_URL } from "../../../Constant";
import type { ProductType } from "@/type/ProductType";

interface CatalogueProductsProps {
  searchParams: {
    catalogueid?: string;
    categoryName?: string;
  };
}



const CatalogueProducts = async ({ searchParams }: CatalogueProductsProps) => {
  const catalogueId = searchParams?.catalogueid || "";
  const categoryName = searchParams?.categoryName || "Products";

  const productsData: Array<ProductType> = [];

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
