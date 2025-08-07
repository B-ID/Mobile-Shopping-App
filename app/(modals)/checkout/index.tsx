import NativeSafeAreaView from "@/components/ui/native-safearea";
import Canvas from "@/components/ui/canvas";
import Container from "@/components/ui/container";
import ScreenHeader from "@/components/screen-header";

const CheckoutScreen = () => {
    return (
        <NativeSafeAreaView>
            <Canvas>
                <Container>
                    <ScreenHeader title={'Checkout'} />
                </Container>
            </Canvas>
        </NativeSafeAreaView>
    )
}

export default CheckoutScreen