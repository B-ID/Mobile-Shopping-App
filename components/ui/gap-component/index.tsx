import { ViewStyle, View } from "react-native";
import { FC } from "react";

type Props = {
  height: number;
  width: number;
  flex: number;
  style: ViewStyle;
};

const GapComponent: FC<Partial<Props>> = ({ width, height, flex, style }) => {
  return <View style={[{ height, width, flex }, style]} />;
};

export default GapComponent;
