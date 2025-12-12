import { create } from "zustand";
import type { Product } from "../types";

interface CartStore {
  cart: Product[];
  addProductToCart: (value: Product) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addProductToCart: (newProduct) =>
    set((state) => ({ cart: [...state.cart, newProduct] })),
}));
