import React from "react";
import MenuOne from "../Menu/MenuOne";
import { SHAPES_API_URL } from "../../../../Constant";
import { SHAPES_CMS_URL } from "../../../../Constant";

const getMenuData = async () => {
  try {
    const res = await fetch(`${SHAPES_CMS_URL}navigation/header`, {
      headers: {
        "Content-Type": "application/json",
        Origin: "https://shapesproduct.netlify.app/",
      },
      next: { revalidate: 86400 },
    });

    const response = await fetch(`${SHAPES_API_URL}getcategoryandsubcatgory`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responsedata = await response.json();
    const data = await res.json();
    return data?.data || null;
  } catch (error) {
    console.error("Failed to fetch menu data:", error);
    return null;
  }
};

const MenuServer = async () => {
  const menuData = await getMenuData();

  return <MenuOne props="bg-white" menuDataHeader={menuData} />;
};

export default MenuServer;
