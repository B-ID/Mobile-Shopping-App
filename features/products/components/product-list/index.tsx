import { View, Text } from "react-native";
import React from "react";
import ProductItem from "../product-item";

type Props = {};

const ProductList = (props: Props) => {
  return (
    <View>
      <Text>ProductList</Text>
      <ProductItem
        productId="1"
        name="Sample Product"
        price={29.99}
        description="This is a sample product description."
        imageUrl="https://via.placeholder.com/150"
      />
    </View>
  );
};

export default ProductList;
