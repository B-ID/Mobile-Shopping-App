import { supabase } from "@/lib/supabase";
import { AddProductMutationArg, PlaceOrderMutationArg } from "../types";
import { CartItem } from "@/store/slices/cart";

const getProducts = async () => {
  const { data, error } = await supabase.from("products").select("*");
  if (error) throw error;
  return data;
};

const addProduct = async (payload: AddProductMutationArg) => {
  const { data, error } = await supabase.from("products").insert({
    name: payload.name,
    price: payload.price,
    imageUrl: payload.imageurl,
  });
  if (error) throw error;
  return data;
};

const placeOrder = async (payload: PlaceOrderMutationArg) => {

  const { data, error } = await supabase.from("orders").insert({
    order_items: payload.cart_items.map(item => ({
      product_id: item.id,
      quantity: item.quantity,
      price: item.price,
    })),
    status: "pending",
    total: payload.total,
    user_id: payload.user_id
  })

  if (error) throw error;
  return data
}

export { getProducts, addProduct, placeOrder };
