interface Variation {
  color: string;
  colorCode: string;
  colorImage: string;
  image: string;
}

export interface ProductType {
  productImages?: Array<string>;
  productName?: string;
  productSku?: string;
  productDescription?: string;
  productsID?: number;
  product_variants_id?: number;
  id: string;
  title?: string;
  category: string;
  type: string;
  name: string;
  gender: string;
  new: boolean;
  sale: boolean;
  rate: number;
  price: number;
  originPrice: number;
  productPrice?: any;
  brand: string;
  sold: number;
  quantity: number;
  quantityPurchase: number;
  sizes: Array<string>;
  variation: Variation[];
  thumbImage: string;
  images?: Array<any>;
  urlimages?: Array<string>;
  description: string;
  action: string;
  slug: string;
  sku?: string;
  isVariant?: boolean;
}

export interface Product_Catalog {
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
  sold: string;
  quantity: string;
  quantityPurchase: string;
  sizes: string[];
  variation: string[];
  thumbImage: string[];
  images: string[];
  urlimages: string[];
  description: string;
  action: string;
  slug: string;
  sku: string;
}
