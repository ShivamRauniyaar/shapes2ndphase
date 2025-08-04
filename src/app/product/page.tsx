import ShopBreadCrumbImg from "@/components/Shop/ShopBreadCrumbImg";
import Link from "next/link";
import { SHAPES_API_URL } from "../../../Constant";

interface Props {
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Fetch products on the server
async function getProducts(page: number) {
  const limit = 10;
  const response = await fetch(
    `${SHAPES_API_URL}getproductsinfo?pageNum=${page}&pageSize=10`,
    {
      headers: { "Content-Type": "application/json" },
      cache: "no-store", // Ensures fresh data
    }
  );

  const productsData = (await response.json())?.data || [];

  return { productsData };
}

export default async function ShopPage({ searchParams }: Props) {
  const page = Number(searchParams?.page) || 1;
  const { productsData } = await getProducts(page);


  return (
    <>
      <div id="header" className="relative w-full">
      </div>

      <ShopBreadCrumbImg
        data={productsData}
        fetchedProduct={productsData}
        productPerPage={10}
        dataType={"Product"}
      />

      <div className="flex justify-center my-6 space-x-2">
        {Array.from({ length: productsData?.length / 10 }, (_, i) => i + 1).map(
          (p) => (
            <Link key={p} href={`/product?page=${p}`}>
              <button
                className={`px-4 py-2 ${
                  page === p ? "selectedTab" : "bg-gray-200"
                }`}
              >
                {p}
              </button>
            </Link>
          )
        )}
      </div>

    </>
  );
}
