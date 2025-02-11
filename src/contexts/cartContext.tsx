"use client";
import React, { createContext, useContext, useState, useCallback } from "react";
import { CartItem } from "@/types";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((newItem: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) =>
          item.productId === newItem.productId &&
          item.colorId === newItem.colorId
      );

      if (existingItem) {
        // Update quantity if item exists
        return prevItems.map((item) =>
          item.productId === newItem.productId &&
          item.colorId === newItem.colorId
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      // Add new item if it doesn't exist
      return [...prevItems, newItem];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
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
