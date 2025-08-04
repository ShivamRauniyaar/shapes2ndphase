import ShopBreadCrumbImg from "@/components/Shop/ShopBreadCrumbImg";
import shapesCatalogData from "@/data/shapes_catalog.json";
import Inner from "@/components/PageTransition/inner";
import type { Metadata } from "next";
import { SHAPES_API_URL } from "../../../../Constant";

type Product = {
  id: string;
  category: string;
  type: string;
  name: string;
  gender: string;
  new: boolean;
  sale: boolean;
  rate: number;
  price: number;
  originPrice: number;
  brand: string;
  sold: number;
  quantity: number;
  quantityPurchase: number;
  sizes: string[];
  sku: string;
  variation: Array<{
    color: string;
    colorCode: string;
    colorImage: string;
    image: string;
  }>;
  thumbImage: string[];
  images: string[];
  urlimages: string[];
  description: string;
  action: string;
  slug: string;
};

type ShapeCatalogItem = {
  category: string[];
  data: Product[];
};

type Props = {
  params: {};
  searchParams: {
    type?: string;
    categoryName?: string;
    catalog?: string;
    subCategory?: string;
  };
};

async function fetchProductData(categoryId: string, subCategoryId: string) {
  try {
    const res = await fetch(
      `${SHAPES_API_URL}getproductsinfo?productCategoryID=${categoryId}&subcatgeoryID=${subCategoryId}`,
      { cache: "no-store" }
    );

    const textResponse = await res.text(); // Capture raw response

    if (!res.ok) throw new Error("Failed to fetch product data");

    const data = JSON.parse(textResponse);

    return data?.data || null;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null;
  }
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const categoryName = searchParams?.categoryName || "Products";
  const categoryId = String(57) //|| searchParams?.catalog || "";
  const subCategoryId = String(13) // ||searchParams?.subCategory || "";
  const productData = await fetchProductData(categoryId, subCategoryId);

  return {
    title: `${categoryName}`,
    description: `Explore our collection of ${categoryName.toLowerCase()} - Shapes is one of the leading brands in cutlery, cookware, and kitchenware.`,
    icons: {
      icon: "/favicon.png",
    },
    openGraph: {
      title: `${categoryName} - Shapes Product Ltd.`,
      description: `Discover premium ${categoryName.toLowerCase()} from Shapes - leading brand in cutlery, cookware, and kitchenware, with over 400 products spanning 30+ categories.`,
      images: [
        {
          url: productData?.[0]?.productImages?.[0],
          width: 1200,
          height: 630,
          alt: `${categoryName} Collection`,
        },
      ],
      type: "website",
    },
  };
}

export default async function BreadcrumbImg({
  searchParams,
}: {
  searchParams: {
    type?: string;
    categoryName?: string;
    catalog?: string;
    subCategory?: string;
  };
}) {
  const category = searchParams?.categoryName || "";
  const categoryId = String(57) // searchParams?.catalog || "";
  const subCategoryId =  String(13) // searchParams?.subCategory || "";
  const type = searchParams?.type || "";

  // Filter category data based on `categoryName`
  const categoryData = shapesCatalogData
    .filter((item: ShapeCatalogItem) => item.category.includes(category))
    .flatMap((item) => item.data)
    .map((product) => ({
      ...product,
      thumbImage: product.thumbImage[0] || "", // Convert thumbImage to a single string
    }));

  // Fetch products from API
  const productData = await fetchProductData(categoryId, subCategoryId);

  return (
    <>
      <Inner backgroundColor="#EA2127" />
      <div id="header" className="relative w-full">
      </div>
      <ShopBreadCrumbImg
        data={categoryData}
        fetchedProduct={productData}
        productPerPage={12}
        dataType={type}
        headerName={category}
        category={category}
      />
      {/* <Footer /> */}
    </>
  );
}
