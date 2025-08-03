import Container from '@/components/ui/container';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Button, Text, View } from 'react-native';


const handleLogin = async () => {}

const LoginScreen = () => {

  return (
    <View>
      <Container>
        <Text>LoginScreen</Text>
        <Button title="Login" onPress={handleLogin} />
      </Container>
    </View>
  );
};

export default LoginScreen;
