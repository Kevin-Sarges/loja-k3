import React from "react";
import { View, Text, Image } from "react-native";

import { BackgroundGradient } from "../BackgroundGradient";
import { styles } from "./styles";

export function Header({ title, icon }) {
  return (
    <BackgroundGradient>
      <View style={styles.container}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </BackgroundGradient>
  );
}
