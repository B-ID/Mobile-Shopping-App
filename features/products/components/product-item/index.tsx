import { Text } from "@/components/ui/rn-text";
import { FC } from "react";
import { View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import Button from "@/components/ui/button";
import GapComponent from "@/components/ui/gap-component";
import { PlusIcon } from "lucide-react-native";
import { formatPrice, showToast } from "@/utils";
import { useCartStore } from "@/store/slices/cart";
import { blurhash } from "@/constants/images";

type Props = {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
  };
  onAddToCart(id: string): void;
};


const ProductItem: FC<Props> = ({ product, onAddToCart }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl
    });

    showToast({
      title: "Added to cart",
      type: "success",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <View className="flex-row items-start gap-4">
      <TouchableOpacity activeOpacity={0.8}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 8 }}
          source={{ uri: product.imageUrl }}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
      </TouchableOpacity>
      <View className="">
        <Text numberOfLines={1} variant="subtitle" className="mt-2 ">
          {product.name}
        </Text>
        <Text variant="small_semibold" className="mt-1">
          {formatPrice(product.price, "NGN")}
        </Text>
        <GapComponent flex={1} />
        <Button
          onPress={handleAddToCart}
          fullWidth
          className=""
          size="sm"
          leftIcon={<PlusIcon color={"white"} />}
        >
          Add to cart
        </Button>
      </View>
    </View>
  );
};

export default ProductItem;
