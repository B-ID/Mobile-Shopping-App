import { FlatList, View } from "react-native";
import ScreenHeader from "@/components/screen-header";
import Button from "@/components/ui/button";
import Canvas from "@/components/ui/canvas";
import Container from "@/components/ui/container";
import GapComponent from "@/components/ui/gap-component";
import NativeSafeAreaView from "@/components/ui/native-safearea";
import { Text } from "@/components/ui/rn-text";
import CartItem from "@/features/cart/components/cart-item";
import { useCartStore } from "@/store/slices/cart";
import { useRouter } from "expo-router";
import { ShoppingCart, Trash2, Trash2Icon } from "lucide-react-native";
import { EmptyState } from "@/components/empty-state";

const CartScreen = () => {
  const router = useRouter();

  const cart = useCartStore((state) => state.items);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const isEmpty = cart.length === 0;

  const goToCheckout = () => {
    router.push("/(modals)/checkout");
  };

  const goHome = () => {
    router.push("/");
  };

  return (
    <NativeSafeAreaView>
      <Canvas>
        <ScreenHeader title={"Cart"} onBackPressAction={router.back} />

        <GapComponent height={14} />

        {isEmpty && (
          <>
            <GapComponent flex={0.4} />
            <Container>
              <EmptyState icon={ShoppingCart} message="Your cart is empty" />
              <GapComponent height={13} />
              <Button
                onPress={goHome}
                rightIcon={<ShoppingCart color={"white"} />}
              >
                Go Shopping
              </Button>
            </Container>
          </>
        )}

        {!isEmpty && (
          <>
            <Container>
              <View className="flex-row items-center justify-between">
                <Text variant="small_medium">Cart Summary</Text>

                <Button
                  variant={"destructive"}
                  size={"sm"}
                  leftIcon={<Trash2 color="white" />}
                  onPress={clearCart}
                >
                  Clear Cart
                </Button>
              </View>
            </Container>

            <GapComponent height={14} />

            <Container>
              <FlatList
                data={cart}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <CartItem
                    product={item}
                    onAddToCart={() => increaseQuantity(item.id)}
                    onRemoveFromCart={() => decreaseQuantity(item.id)}
                  />
                )}
                contentContainerClassName="gap-4 "
                ListFooterComponent={() => (
                  <Button disabled={isEmpty} size="lg" onPress={goToCheckout}>
                    Checkout
                  </Button>
                )}
              />
            </Container>
          </>
        )}
      </Canvas>
    </NativeSafeAreaView>
  );
};

export default CartScreen;
