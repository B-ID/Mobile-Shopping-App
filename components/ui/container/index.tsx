import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

type Props = PropsWithChildren & ViewProps;

const Container: FC<Props> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});

export default Container;