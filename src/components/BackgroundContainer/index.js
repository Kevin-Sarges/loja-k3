import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function BackgroundContainer({ children }) {
  const { secondary05, secondary02 } = theme.color;

  return (
    <LinearGradient
      colors={[secondary05, secondary02]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
}
