import React from 'react'
import NativeSafeAreaView from "@/components/ui/native-safearea";
import ScreenHeader from "@/components/screen-header";
import Canvas from "@/components/ui/canvas";
import {useRouter} from "expo-router";

type Props = {}

const CreateProduct = (props: Props) => {
    const router = useRouter()
    return (
        <NativeSafeAreaView>
            <Canvas>
                <ScreenHeader title={'Create Products'} onBackPressAction={router.back}/>
            </Canvas>
        </NativeSafeAreaView>
    )
}

export default CreateProduct