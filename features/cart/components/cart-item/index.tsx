import React, { FC } from "react";
import { View } from "react-native";
import { Text } from "@/components/ui/rn-text";
import { formatPrice } from "@/utils";

import { Image } from "expo-image";
import { blurhash } from "@/constants/images";
import GapComponent from "@/components/ui/gap-component";
import { useCartStore } from "@/store/slices/cart";
import { MinusIcon, PlusIcon } from "lucide-react-native";
import Button from "@/components/ui/button";

type Props = {
  product: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  };
  hideControls?: boolean;
  onAddToCart(id: string): void;
  onRemoveFromCart(id: string): void;
};

const CartItem: FC<Props> = ({
  product,
  onAddToCart,
  hideControls = false,
  onRemoveFromCart,
}) => {
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

          <View className="flex-row items-center">
            <Text variant="subtitle" className="mb-2">
              {formatPrice(product.price, "NGN")}
            </Text>
            <Text variant="small_semibold" className="mb-2">
              {" "}x{product.quantity}
            </Text>
          </View>
        </View>
        <GapComponent height={8} />
        {!hideControls && (
          <View className="flex-row items-center gap-4">
            <Button size={"sm"} onPress={() => onRemoveFromCart(product.id)}>
              <MinusIcon color={"white"} />
            </Button>
            <Text>{product.quantity}</Text>
            <Button size={"sm"} onPress={() => onAddToCart(product.id)}>
              <PlusIcon color={"white"} />
            </Button>
          </View>
        )}
      </View>
    </View>
  );
};

export default CartItem;
