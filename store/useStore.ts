import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { CartSlice, createCartSlice } from "./slices/cart";

type StoreState = CartSlice;

export const useStore = create<StoreState>()(
  devtools(
    persist(
      (set, get) => ({
        ...createCartSlice(set as any, get as any),
      }),
      {
        name: "app-storage",
      }
    )
  )
);
