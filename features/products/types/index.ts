import { CartItem } from "@/store/slices/cart";

type AddProductMutationArg = {
  name: string;
  price: number;
  imageurl: URL | string;
};

type PlaceOrderMutationArg = {
  cart_items: CartItem[]
  total: number
  user_id?: string
}

export type { AddProductMutationArg, PlaceOrderMutationArg };