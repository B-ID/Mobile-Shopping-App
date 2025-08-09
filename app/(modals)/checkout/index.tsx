import NativeSafeAreaView from "@/components/ui/native-safearea";
import Canvas from "@/components/ui/canvas";
import Container from "@/components/ui/container";
import ScreenHeader from "@/components/screen-header";
import { useRouter } from "expo-router";
import Button from "@/components/ui/button";
import { useCartStore } from "@/store/slices/cart";
import CartItem from "@/features/cart/components/cart-item";
import { FlatList, View } from "react-native";
import GapComponent from "@/components/ui/gap-component";
import { formatPrice } from "@/utils";
import { Text } from "@/components/ui/rn-text";
import { useProductService } from "@/features/products/model/useProductService";
import { COLORS } from "@/constants/Colors";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

const CheckoutScreen = () => {
  const {
    checkoutMutation: { mutateAsync, isPending },
  } = useProductService();
  const router = useRouter();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      const id = data?.session?.user?.id as string;
      setUserId(id);
    };

    fetchSession();
  }, []);

  const cart = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.getTotalPrice);

  const handleOrderPlacing = async () => {
    return await mutateAsync({
      cart_items: cart,
      total: totalPrice(),
      user_id: userId,
    });
  };

  return (
    <NativeSafeAreaView>
      <Canvas>
        <ScreenHeader
          title={"Checkout"}
          onBackPressAction={router.back}
          showNavigation
        />

        <GapComponent height={14} />

        <Container>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CartItem
                product={item}
                hideControls
                onAddToCart={() => {}}
                onRemoveFromCart={() => {}}
              />
            )}
            contentContainerClassName="gap-4 "
          />
        </Container>

        <GapComponent flex={0.95} />

        <View
          style={{ borderColor: COLORS.default }}
          className="w-full border"
        />

        <GapComponent height={10} />

        <View>
          <Container>
            <View className="flex-row items-center justify-between mb-4">
              <Text variant="subtitle_semibold">Total:</Text>
              <Text variant="subtitle">{formatPrice(totalPrice(), "NGN")}</Text>
            </View>
          </Container>

          <Container>
            <Button
              onPress={handleOrderPlacing}
              loading={isPending}
              size={"lg"}
            >
              Place Order
            </Button>
          </Container>
        </View>
      </Canvas>
    </NativeSafeAreaView>
  );
};

export default CheckoutScreen;
