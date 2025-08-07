import NativeSafeAreaView from "@/components/ui/native-safearea";
import ScreenHeader from "@/components/screen-header";
import Canvas from "@/components/ui/canvas";

const ProfileScreen = () => {
    return (
        <NativeSafeAreaView>
            <Canvas>
                <ScreenHeader title={'Profile Screen'} />
            </Canvas>
        </NativeSafeAreaView>
    )
}

export default ProfileScreen