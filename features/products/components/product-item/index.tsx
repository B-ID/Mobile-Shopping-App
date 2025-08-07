import { Text } from "@/components/ui/rn-text";
import { FC } from "react";
import { View } from "react-native";

type Props = {
  productId: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

const ProductItem: FC<Props> = ({
  productId,
  name,
  price,
  description,
  imageUrl,
}) => {
  return (
    <View>
      <Text>ProductItem</Text>
    </View>
  );
};

export default ProductItem;
