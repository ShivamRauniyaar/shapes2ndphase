"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { ProductType } from "@/type/ProductType";
import Axios from "@/Functions/Axios";
import { API_URL } from "@/Constant";

// Set your authentication logic here
const isAuth = false; // Replace with actual authentication check

// Util: Generate UUID with Date
const generateUUID = (): string => {
  const existingID = localStorage?.getItem("cartID");
  if (existingID) return existingID;

  const randomPart = "xxxxxxxx-xxxx-4xxxyxxx".replace(/[xy]/g, (char) => {
    const random = (Math.random() * 16) | 0;
    const value = char === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });

  const now = new Date();
  const datePart = `${String(now.getDate()).padStart(2, "0")}-${String(
    now.getMonth() + 1
  ).padStart(2, "0")}-${now.getFullYear()}`;

  const uuid = `${randomPart}-${datePart}`;
  localStorage.setItem("cartID", uuid);
  return uuid;
};

interface DBCartItem {
  price: number;
  thumbnail: string;
  isVariant: boolean;
  skucode: string;
  quantity: number;
  productId: number;
  id: number;
  productname: string;
  cartID?: string;
}

interface CartItem extends ProductType {
  productPrice: string;
  range?: ReactNode;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

interface CartState {
  cartArray: CartItem[];
}

const enum CartActionType {
  ADD = "ADD_TO_CART",
  REMOVE = "REMOVE_FROM_CART",
  UPDATE = "UPDATE_CART",
  LOAD = "LOAD_CART",
}

type CartAction =
  | { type: CartActionType.ADD; payload: CartItem }
  | { type: CartActionType.REMOVE; payload: number }
  | {
      type: CartActionType.UPDATE;
      payload: {
        itemId: string;
        quantity: number;
        selectedSize?: string;
        selectedColor?: string;
      };
    }
  | { type: CartActionType.LOAD; payload: CartItem[] };

interface CartContextProps {
  cartId: string;
  cartState: CartState;
  Get_Cart: () => void;
  addToCart: (item: ProductType) => void;
  removeFromCart: (itemId: number, skucode: string) => void;
  updateCart: (
    itemId: string,
    quantity: number,
    skucode: string,
    selectedSize?: string,
    selectedColor?: string
  ) => void;
  migrateLocalCartToDB: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

const mapToCartItem = (product: ProductType): CartItem => ({
  ...product,
  id: product.isVariant
    ? (product.product_variants_id ?? product.id).toString()
    : (product.productsID ?? product.id).toString(),
  productPrice:
    product.productPrice?.toString() ?? product.price?.toString() ?? "0",
  selectedSize: "",
  selectedColor: "",
  quantity: 1,
});

const dbCartItemToCartItem = (item: DBCartItem): CartItem => ({
  id: item.productId.toString(),
  isVariant: item.isVariant,
  productPrice: item.price.toString(),
  productsID: item.productId,
  productName: item.productname,
  productSku: item.skucode,
  thumbImage: item.thumbnail,
  quantity: item.quantity,
  selectedSize: "",
  selectedColor: "",
  productImages: [],
  title: item.productname,
  category: "",
  type: "",
  name: item.productname,
  gender: "",
  new: false,
  sale: false,
  rate: 0,
  price: item.price,
  originPrice: item.price,
  brand: "",
  sold: 0,
  quantityPurchase: 0,
  sizes: [],
  variation: [],
  images: [],
  urlimages: [],
  description: "",
  action: "",
  slug: "",
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionType.ADD:
      return {
        ...state,
        cartArray: [...state.cartArray, action.payload],
      };
    case CartActionType.REMOVE:
      return {
        ...state,
        cartArray: state.cartArray.filter((item) =>
          item.isVariant
            ? item.product_variants_id !== action.payload
            : item.productsID !== action.payload
        ),
      };
    case CartActionType.UPDATE:
      return {
        ...state,
        cartArray: state.cartArray.map((item) =>
          item.id === action.payload.itemId
            ? {
                ...item,
                quantity: action.payload.quantity,
                ...(action.payload.selectedSize && {
                  selectedSize: action.payload.selectedSize,
                  selectedColor: action.payload.selectedColor,
                }),
              }
            : item
        ),
      };
    case CartActionType.LOAD:
      return {
        ...state,
        cartArray: action.payload,
      };
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartState, dispatch] = useReducer(cartReducer, { cartArray: [] });
  const [cartId, setCartId] = useState<string>("defaultCartId");

  const addToCart = async (item: ProductType) => {
    const newItem = mapToCartItem(item);

    if (isAuth) {
      const dbCartItem: DBCartItem = {
        price: item.productPrice ? parseFloat(item.productPrice) : 0,
        thumbnail: item.thumbImage || "",
        isVariant: item.isVariant || false,
        skucode: item.productSku || "",
        quantity: 1,
        productId: item.isVariant
          ? item.product_variants_id ?? 0
          : item.productsID ?? 0,
        id: item.isVariant
          ? item.product_variants_id ?? 0
          : item.productsID ?? 0,
        productname: item.productName || item.name || "",
        cartID: cartId,
      };
      const newCartId = await AddToDatabase(dbCartItem);
      if (newCartId) setCartId(newCartId);
    } else {
      const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
      localCart.push(newItem);
      localStorage.setItem("cart", JSON.stringify(localCart));
    }

    dispatch({ type: CartActionType.ADD, payload: newItem });
  };

  const Get_Cart = async () => {
    try {
      if (isAuth) {
        const data = await GetCart();
        const items = data.map((item) => {
          if (item?.cartID) setCartId(item.cartID);
          return dbCartItemToCartItem(item);
        });
        dispatch({ type: CartActionType.LOAD, payload: items });
      } else {
        const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
        dispatch({ type: CartActionType.LOAD, payload: localCart });
      }
    } catch (error) {
      console.error("Error loading cart:", error);
    }
  };

  const removeFromCart = async (itemId: number, skucode: string) => {
    if (isAuth) {
      await RemoveCartItem(cartId, skucode);
      dispatch({ type: CartActionType.REMOVE, payload: itemId });
      Get_Cart();
    } else {
      const updatedCart = cartState.cartArray.filter((item) =>
        item.isVariant
          ? item.product_variants_id !== itemId
          : item.productsID !== itemId
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      dispatch({ type: CartActionType.LOAD, payload: updatedCart });
    }
  };
  const migrateLocalCartToDB = async () => {
    
    const localCartData = localStorage.getItem("cart");
    const cartItems: CartItem[] = localCartData
      ? JSON.parse(localCartData)
      : [];

    if (cartItems.length === 0) return;

    for (const item of cartItems) {
      const dbCartItem: DBCartItem = {
        price: parseFloat(item.productPrice),
        thumbnail: item.thumbImage || "",
        isVariant: item.isVariant || false,
        skucode: item.productSku || "",
        quantity: item.quantity,
        productId: item.isVariant
          ? item.product_variants_id ?? 0
          : item.productsID ?? 0,
        id: item.isVariant
          ? item.product_variants_id ?? 0
          : item.productsID ?? 0,
        productname: item.productName || item.name || "",
      };

      await AddToDatabase(dbCartItem);
    }

    // Clear local cart after migration
    localStorage.removeItem("cart");
    localStorage.removeItem("cartID");

    // Refresh cart from server
    GetCart();
  };

  const updateCart = async (
    itemId: string,
    quantity: number,
    skucode: string,
    selectedSize?: string,
    selectedColor?: string
  ) => {
    if (isAuth) {
      await UpdateCartItem(cartId, skucode, quantity);
    } else {
      const updatedCart = cartState.cartArray.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity,
              ...(selectedSize && {
                selectedSize,
                selectedColor,
              }),
            }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    dispatch({
      type: CartActionType.UPDATE,
      payload: { itemId, quantity, selectedSize, selectedColor },
    });
  };

  useEffect(() => {
    Get_Cart();
    migrateLocalCartToDB();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartId,
        cartState,
        addToCart,
        removeFromCart,
        updateCart,
        Get_Cart,
        migrateLocalCartToDB,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Axios calls
const AddToDatabase = async (item: DBCartItem) => {
  try {
    const payload = { cartItem: JSON.stringify(item) };
    const res = await Axios.post(
      `${API_URL}/api/public/carts/ecomaddtocart`,
      payload
    );
    return res.data.data;
  } catch (err) {
    console.error("AddToDatabase error:", err);
  }
};

const GetCart = async (): Promise<DBCartItem[]> => {
  try {
    const res = await Axios.get(`${API_URL}/api/public/carts/getexistingcart`);
    return res.data.data || [];
  } catch (err) {
    console.error("GetCart error:", err);
    return [];
  }
};

const RemoveCartItem = async (cartID: string, skucode: string) => {
  try {
    const payload = { cartID, skucode };
    await Axios.post(
      `${API_URL}/api/public/carts/removecartecomaddtocart`,
      payload
    );
  } catch (err) {
    console.error("RemoveCartItem error:", err);
  }
};

const UpdateCartItem = async (
  cartID: string,
  skucode: string,
  quantity: number
) => {
  try {
    const payload = { cartID, skucode, quantity };
    await Axios.post(`${API_URL}/api/public/carts/updatecartitem`, payload);
  } catch (err) {
    console.error("UpdateCartItem error:", err);
  }
};
