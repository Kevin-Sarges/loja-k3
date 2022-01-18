import React from "react";
import { Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function Header(props) {
  const { secondary05, secondary02 } = theme.color;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary05, secondary02]}
    >
      {props.children}
      <Image source={props.icon} style={styles.icon} />
      <Text style={styles.title}>{props.title}</Text>
    </LinearGradient>
  );
}
