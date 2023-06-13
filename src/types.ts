export interface CartItem {
  name: string;
  image: string;
  price: number;
  productAmount: number;
  totalPrice: number;
}

export interface Product {
  id?: number;
  name: string;
  category: string;
  image: string;
  price: number;
  inStock: boolean;
}

export interface Params {
  name_like: string;
  categoryId?: number;
  _page: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}
