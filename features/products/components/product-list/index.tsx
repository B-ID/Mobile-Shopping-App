import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import ProductItem from "../product-item";
import { useProductService } from "../../model/useProductService";

const imageSource =
  "https://images.unsplash.com/photo-1589779137147-3d388746b765?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ProductList = () => {
  const {
    getProductsQuery: { data, isLoading, isError },
  } = useProductService();

  if (isLoading && !isError) {
    return (
      <View className="py-4">
        <ActivityIndicator size={24} />
      </View>
    );
  }

  return (
    <View className="py-2">
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            onAddToCart={(id) => console.log("Add to cart", id)}
          />
        )}
      />
    </View>
  );
};

export default ProductList;
