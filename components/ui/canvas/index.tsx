import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

type Props = PropsWithChildren & ViewProps;

const Canvas: FC<Props> = ({ children, style }) => {
  return <View style={[styles.canvas, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Canvas;