import NativeSafeAreaView from "@/components/ui/native-safearea";
import Canvas from "@/components/ui/canvas";
import ScreenHeader from "@/components/screen-header";
import Button from "@/components/ui/button";
import {Text} from '@/components/ui/rn-text'
import Container from "@/components/ui/container";
import { useRouter } from "expo-router";


const CartScreen = () => {

    const router = useRouter()


    const goToCheckout = () => {
        router.push("/(modals)/checkout")
    }

    return (
        <NativeSafeAreaView>
            <Canvas>
                <ScreenHeader title={'Cart Screen'} onBackPressAction={router.back}/>
                <Text>cart screen</Text>

                <Container>
                    <Button onPress={goToCheckout}>
                        Checkout
                    </Button>
                </Container>
            </Canvas>
        </NativeSafeAreaView>
    )
}

export default CartScreen