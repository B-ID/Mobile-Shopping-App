import React from 'react'
import { Stack } from 'expo-router'

type Props = {}

const AuthLayout = (props: Props) => {
  return (
    <Stack>
        <Stack.Screen name='login' />
        <Stack.Screen name='sign-up' />
    </Stack>
  )
}

export default AuthLayout