import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { FONT } from "@/constants/font-family";
import { ShoppingCart, UserIcon, HomeIcon } from "lucide-react-native";

export default function TabLayout() {
  // const colorScheme = useColorScheme();
  const colorScheme = "light";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // animation: 'shift',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            backgroundColor: "white",
            borderColor: "transparent",
          },
          android: {
            backgroundColor: "white",
            borderColor: "transparent",
          },
          default: {
            backgroundColor: "white",
            borderColor: "transparent",
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: FONT.MontserratMedium,
          },
          tabBarIcon: ({ color }) => <HomeIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => <ShoppingCart size={24} color={color} />,
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: FONT.MontserratMedium,
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => <UserIcon size={24} color={color} />,
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: FONT.MontserratMedium,
          },
        }}
      />
    </Tabs>
  );
}
