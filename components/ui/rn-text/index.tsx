import { Colors } from "@/constants/Colors";
import { FONT } from "@/constants/font-family";
import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from "react-native";

type Variant = "title" | "subtitle" | "body" | "caption" | "small" | "small_medium" | "small_semibold" | "title_medium" | "title_medium_semibold" | "subtitle_semibold";

interface Props extends RNTextProps {
  variant?: Variant;
  children: React.ReactNode;
  style?: TextStyle;
}

const variantStyles: Record<Variant, TextStyle> = {
  title: {
    fontSize: 32,
    color: Colors.light.default,
    fontFamily: FONT.MontserratSemiBold,
  },
  title_medium: {
    fontSize: 24,
    color: Colors.light.default,
    fontFamily: FONT.MontserratMedium,
  },
  title_medium_semibold: {
    fontSize: 24,
    color: Colors.light.default,
    fontFamily: FONT.MontserratSemiBold,
  },
  subtitle: {
    fontSize: 17,
    color: Colors.light.default,
    fontFamily: FONT.MontserratMedium,
  },

  subtitle_semibold: {
    fontSize: 17,
    color: Colors.light.default,
    fontFamily: FONT.MontserratSemiBold,
  },
  body: {
    fontSize: 16,
    color: Colors.light.default,
    fontFamily: FONT.MontserratRegular,
  },
  caption: {
    fontSize: 12,
    color: Colors.light.default,
    fontFamily: FONT.MontserratLight,
  },
  small: {
    fontSize: 14,
    color: Colors.light.default,
    fontFamily: FONT.MontserratRegular,
  },
  small_medium: {
    fontSize: 14,
    color: Colors.light.default,
    fontFamily: FONT.MontserratMedium,
  },
  small_semibold: {
    fontSize: 14,
    color: Colors.light.default,
    fontFamily: FONT.MontserratSemiBold,

  }
};

export const Text: React.FC<Props> = ({
  variant = "body",
  children,
  style,
  ...rest
}) => {
  return (
    <RNText style={[variantStyles[variant], style]} {...rest}>
      {children}
    </RNText>
  );
};
