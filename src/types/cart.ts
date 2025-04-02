export interface ColorVariant {
  _id: string;
  mainImage: string;
}

export interface Product {
  _id: string;
  title: string;
  price: number;
  colorVariants: ColorVariant[];
}

export interface CartItem {
  _id: string;
  productId: string;
  colorId: string;
  quantity: number;
}

export interface EnrichedCartItem extends CartItem {
  product: Product;
}

export interface CartContextType {
  cartItems: EnrichedCartItem[];
  enrichedCartItems: EnrichedCartItem[];
  addToCart: (items: CartItem[] | CartItem) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  updateQuantity: (productId: string, quantity: number, colorId: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  products: Record<string, Product>;
  cartTotal: number;
  fetchCart: () => Promise<void>;
}
