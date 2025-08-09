import Canvas from "@/components/ui/canvas";
import Container from "@/components/ui/container";
import GapComponent from "@/components/ui/gap-component";
import NativeSafeAreaView from "@/components/ui/native-safearea";
import { Text } from "@/components/ui/rn-text";
import { COLORS } from "@/constants/Colors";
import LoginForm from "@/features/auth/components/forms/login";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";

const LoginScreen = () => {
  return (
    <NativeSafeAreaView style={{ backgroundColor: COLORS.tint }}>
      <Canvas>
        <GapComponent flex={0.4} />
        <View className="">
          <Container>
            <Text variant="title">Login</Text>
            <GapComponent height={24} />
            <View className={"mb-4"}>
              <LoginForm />
            </View>
            <Text variant={"small"} className={"text-center"}>
              Don&apos;t have an account?{" "}
              <Link className={"underline"} href={"/(auth)/sign-up"}>
                Sign Up
              </Link>
            </Text>
          </Container>
        </View>
      </Canvas>
    </NativeSafeAreaView>
  );
};

export default LoginScreen;
