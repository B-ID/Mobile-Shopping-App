import ScreenHeader from "@/components/screen-header";
import Button from "@/components/ui/button";
import Canvas from "@/components/ui/canvas";
import Container from "@/components/ui/container";
import NativeSafeAreaView from "@/components/ui/native-safearea";
import ProductList from "@/features/products/components/product-list";
import { useRouter } from "expo-router";
import { PlusIcon } from "lucide-react-native";

export default function HomeScreen() {
  const router = useRouter();

  const goToAddProduct = () => {
    router.push("/(modals)/add-product");
  };

  return (
    <NativeSafeAreaView>
      <Canvas>
        <ScreenHeader
          title={"Products"}
          rightElement={
            <Button
              leftIcon={<PlusIcon color="#fff" className="text-white" />}
              onPress={goToAddProduct}
            >
              Add product
            </Button>
          }
        />
        <Container>
          <ProductList />
        </Container>
      </Canvas>
    </NativeSafeAreaView>
  );
}
