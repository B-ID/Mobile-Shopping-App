import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { addProduct, getProducts } from "../api/products.service";
import { showToast } from "@/utils";

export const useProductService = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

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
        description: 'Product has been added successfully.',
      });

      router.back();
    },
    onError(err) {
      console.error(err);
    },
  });
  return { getProductsQuery, addProductMutation };
};
