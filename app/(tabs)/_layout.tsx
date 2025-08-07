import {Tabs} from 'expo-router';
import React from 'react';
import {Platform} from 'react-native';

import {HapticTab} from '@/components/HapticTab';
import {IconSymbol} from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import {Colors} from '@/constants/Colors';
import {FONT} from "@/constants/font-family";
import {ShoppingCart, UserIcon, HomeIcon} from "lucide-react-native";

export default function TabLayout() {
    // const colorScheme = useColorScheme();
    const colorScheme = 'light'

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                animation: 'shift',
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarStyle: Platform.select({
                    ios: {
                        // Use a transparent background on iOS to show the blur effect
                        position: 'absolute',
                    },
                    default: {},
                }),
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Products',
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontFamily: FONT.MontserratMedium,
                    },
                    // tabBarIcon: ({color}) => <IconSymbol size={28} name="house.fill" color={color}/>,
                    tabBarIcon: ({ color }) => <HomeIcon size={24} color={color} />,
                }}
            />
            {/*<Tabs.Screen*/}
            {/*    name="explore"*/}
            {/*    options={{*/}
            {/*        title: 'Explore',*/}
            {/*        tabBarIcon: ({color}) => <IconSymbol size={28} name="paperplane.fill" color={color}/>,*/}
            {/*        tabBarLabelStyle: {*/}
            {/*            fontSize: 12,*/}
            {/*            fontFamily: FONT.MontserratMedium,*/}
            {/*        },*/}
            {/*    }}*/}
            {/*/>*/}
            <Tabs.Screen
                name="cart"
                options={{
                    title: 'Cart',
                    // tabBarIcon: ({color}) => <IconSymbol size={28} name="paperplane.fill" color={color}/>,
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
                    title: 'Profile',
                    // tabBarIcon: ({color}) => <IconSymbol size={28} name="paperplane.fill" color={color}/>,
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
