import { supabase } from "@/lib/supabase";
import { AddProductMutationArg } from "../types";

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

export { getProducts, addProduct };
