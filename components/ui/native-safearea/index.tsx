import React, { FC } from "react";
import { ViewStyle } from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

interface NativeSafeAreaViewProps extends SafeAreaViewProps {
  transparent?: boolean;
}

const NativeSafeAreaView: FC<NativeSafeAreaViewProps> = (props) => {
  const { children, style, transparent, ...rest } = props;

  const safeAreaStyle: ViewStyle = {
    flex: 1,
    backgroundColor: transparent ? "transparent" : undefined,
  };

  return (
    <SafeAreaView style={[safeAreaStyle, style, {backgroundColor: 'white'}]} {...rest}>
      {children}
    </SafeAreaView>
  );
};

export default NativeSafeAreaView;
