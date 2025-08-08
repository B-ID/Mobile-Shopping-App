import React, { FC } from "react";
import { View } from "react-native";
import { Text } from "@/components/ui/rn-text";
import { formatPrice } from "@/utils";

import { Image } from "expo-image";
import { blurhash } from "@/constants/images";
import GapComponent from "@/components/ui/gap-component";
import { useCartStore } from "@/store/slices/cart";

type Props = {
  product: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  };
  onAddToCart(id: string): void;
  onRemoveFromCart(id: string): void;
};

const CartItem: FC<Props> = ({ product, onAddToCart, onRemoveFromCart }) => {

    const totalPrice = useCartStore((state) => state.getTotalPrice);
    const totalQuantity = useCartStore((state) => state.getTotalQuantity);

  return (
    <View className="flex-row items-start gap-4">
      <Image
        style={{ width: 100, height: 100, borderRadius: 8 }}
        source={{ uri: product.imageUrl }}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />

      <View>
        <View>
          <Text variant="subtitle" className="mb-2">
            {product.name}
          </Text>

          <Text variant="subtitle" className="mb-2">
            {formatPrice(product.price)} x {totalPrice()}
          </Text>
        </View>
        <GapComponent height={8} />
        <View>

        </View>
      </View>
    </View>
  );
};

export default CartItem;
