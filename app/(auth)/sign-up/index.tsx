import React from "react";
import {Text} from "@/components/ui/rn-text";
import {View} from "react-native";
import SignupForm from "@/features/auth/components/forms/sign-up";
import NativeSafeAreaView from "@/components/ui/native-safearea";
import Canvas from "@/components/ui/canvas";
import GapComponent from "@/components/ui/gap-component";
import Container from "@/components/ui/container";
import {Link} from "expo-router";


const SignUpScreen = () => {
    return (
        <NativeSafeAreaView>
            <Canvas>
                <GapComponent flex={0.4}/>
                <View className="">
                    <Container>
                        <Text variant="title">Sign Up</Text>
                        <GapComponent height={24}/>
                        <View className={'mb-4'}>
                            <SignupForm/>
                        </View>
                        <Text variant={'small'} className={'text-center'}>Already have an account?
                            {" "}
                            <Link className={'underline'} href={'/(auth)/login'}>Sign in</Link>
                        </Text>
                    </Container>
                </View>
            </Canvas>
        </NativeSafeAreaView>
    );
};

export default SignUpScreen;
