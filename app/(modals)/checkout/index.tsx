import NativeSafeAreaView from "@/components/ui/native-safearea";
import Canvas from "@/components/ui/canvas";
import Container from "@/components/ui/container";
import ScreenHeader from "@/components/screen-header";
import { useRouter } from "expo-router";
import Button from "@/components/ui/button";

const CheckoutScreen = () => {
  const router = useRouter();
  return (
    <NativeSafeAreaView>
      <Canvas>
        <Container>
          <ScreenHeader
            title={"Checkout"}
            onBackPressAction={router.back}
            showNavigation
          />
        </Container>

        <Container>
          <Button size={'lg'}>Place Order</Button>
        </Container>
      </Canvas>
    </NativeSafeAreaView>
  );
};

export default CheckoutScreen;
