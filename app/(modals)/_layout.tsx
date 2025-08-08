import React from 'react'
import { Stack } from 'expo-router'

type Props = {}

const ModalLayout = (props: Props) => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name='add-product' />
            <Stack.Screen name='checkout' />
        </Stack>
    )
}

export default ModalLayout
