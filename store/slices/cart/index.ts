import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalQuantity: () => number;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],

        addItem: (item) => {
          const existing = get().items.find((i) => i.id === item.id);
          if (existing) {
            set((state) => ({
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            }));
          } else {
            set((state) => ({
              items: [...state.items, item],
            }));
          }
        },

        removeItem: (id) => {
          set((state) => ({
            items: state.items.filter((i) => i.id !== id),
          }));
        },

        increaseQuantity: (id) => {
          set((state) => ({
            items: state.items.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          }));
        },

        decreaseQuantity: (id) => {
          set((state) => ({
            items: state.items
              .map((i) =>
                i.id === id ? { ...i, quantity: i.quantity - 1 } : i
              )
              .filter((i) => i.quantity > 0),
          }));
        },

        clearCart: () => {
          set({ items: [] });
        },

        getTotalPrice: () =>
          get().items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          ),

        getTotalQuantity: () =>
          get().items.reduce((sum, item) => sum + item.quantity, 0),
      }),
      {
        name: "cart-storage",
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
);
