import React from "react";
import NativeSafeAreaView from "@/components/ui/native-safearea";
import ScreenHeader from "@/components/screen-header";
import Canvas from "@/components/ui/canvas";
import { useRouter } from "expo-router";
import AddProductForm from "@/features/products/components/forms/add-product";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const AddProduct = () => {
  const router = useRouter();

  return (
    <NativeSafeAreaView>
      <Canvas>
        <ScreenHeader
          showNavigation
          title={"Add Product"}
          onBackPressAction={router.back}
        />
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <AddProductForm />
        </KeyboardAwareScrollView>
      </Canvas>
    </NativeSafeAreaView>
  );
};

export default AddProduct;
