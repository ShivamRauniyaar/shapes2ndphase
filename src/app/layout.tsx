import type { Metadata } from "next";
import "@/styles/styles.scss";
import GlobalProvider from "./GlobalProvider";
import ModalCart from "@/components/Modal/ModalCart";
import ModalWishlist from "@/components/Modal/ModalWishlist";
import ModalSearch from "@/components/Modal/ModalSearch";
import ModalQuickview from "@/components/Modal/ModalQuickview";
import ModalCompare from "@/components/Modal/ModalCompare";
import CountdownTimeType from "@/type/CountdownType";
import { countdownTime } from "@/store/countdownTime";
import MenuServer from "@/components/Header/MenuServer/MenuServer";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { DeleteModal } from "@/components/Modal";
import { Gelasio } from "next/font/google";

const gelasio = Gelasio({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
});
const serverTimeLeft: CountdownTimeType = countdownTime();

export const metadata: Metadata = {
  title: "Spoon, Kitchenware, Stainless Stell Cutlery Manufacturers",
  description:
    "Shapes in one of the leading brand in cutlery, cookware and kitchenware, with over 400 products spanning over 30 product categories.",
  icons: {
    icon: "/favicon.png", // Path relative to public folder
  },
  openGraph: {
    title: "Spoon, Kitchenware, Stainless Steel Cutlery Manufacturers",
    description:
      "Shapes is one of the leading brands in cutlery, cookware, and kitchenware, with over 400 products spanning over 30 product categories.",
    images: [
      {
        url: "/images/homepage/ShapesLogo.png", // Replace with the correct URL of your image
        width: 1200, // Optional: specify width of the image
        height: 630, // Optional: specify height of the image
        alt: "Gold Satin Cutlery Set", // Optional: provide an alt description
      },
    ],
    type: "website", // Optional: specify the type (e.g., website, article)
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalProvider>
      <html lang="en" className={gelasio.className}>
        <body>
          {/* <TopNavOne /> */}
          <div id="header" className="relative w-full">
            <MenuServer />
          </div>
          <ToastContainer />

          {children}
          <ModalCart serverTimeLeft={serverTimeLeft} />
          <ModalWishlist />
          <ModalSearch />
          <ModalQuickview />
          <ModalCompare />
          <DeleteModal />
          <Footer />
        </body>
      </html>
    </GlobalProvider>
  );
}
