import React from "react";
import { Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function Header({ title, icon, children }) {
  const { secondary05, secondary02 } = theme.color;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary05, secondary02]}
    >
      {children}
      <Image source={icon} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </LinearGradient>
  );
}
