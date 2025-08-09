import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { addProduct, getProducts, placeOrder } from "../api/products.service";
import { showToast } from "@/utils";
import { useCartStore } from "@/store/slices/cart";

export const useProductService = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const clearCart = useCartStore((state) => state.clearCart)

  const getProductsQuery = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const addProductMutation = useMutation({
    mutationKey: ["add-product"],
    mutationFn: addProduct,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      showToast({
        title: "Add product",
        type: "success",
        description: "Product has been added successfully.",
      });

      router.back();
    },
    onError(err) {
      console.error(err);
    },
  });

  const checkoutMutation = useMutation({
    mutationKey: ["checkout"],
    mutationFn: placeOrder,
    onSuccess() {
      showToast({
        title: "Checkout",
        type: "success",
        description: "Your order has been placed successfully.",
      });
      router.push("/");
      clearCart()
    },
    onError(err) {
      showToast({
        title: "Checkout Error",
        type: "danger",
        description: err.message || "An error occurred while placing your order.",
      });
    },
  });

  return { checkoutMutation, getProductsQuery, addProductMutation };
};
