import ScreenHeader from "@/components/screen-header";
import Button from "@/components/ui/button";
import Canvas from "@/components/ui/canvas";
import Container from "@/components/ui/container";
import NativeSafeAreaView from "@/components/ui/native-safearea";
import ProductList from "@/features/products/components/product-list";
import { useRouter } from "expo-router";
import { ScrollView, View } from "react-native";
import { PlusIcon } from "lucide-react-native";

export default function HomeScreen() {
  const router = useRouter();

  const goToCreateProduct = () => {
    router.push("/(modals)/create-product");
  };

  return (
    <NativeSafeAreaView>
      <Canvas>
        <ScreenHeader
          title={"Products"}
          rightElement={
            <Button
              leftIcon={<PlusIcon color="#fff" className="text-white" />}
              onPress={goToCreateProduct}
            >
              Add product
            </Button>
          }
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Container>
            <ProductList />
          </Container>

          <Container></Container>
        </ScrollView>
      </Canvas>
    </NativeSafeAreaView>
  );
}
