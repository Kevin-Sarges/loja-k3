import React, { useState } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function Category({ icon, title }) {
  const { secondary05, secondary01, secondary03, secondary04, secondary02 } =
    theme.color;
  const [checked, setChecked] = useState("");

  function handleClick() {
    checked ? setChecked("") : setChecked(true);
  }

  return (
    <TouchableOpacity onPress={handleClick} activeOpacity={0.7}>
      <LinearGradient
        style={styles.container}
        colors={[secondary05, secondary02]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.4 }]}
          colors={[checked ? secondary01 : secondary03, secondary04]}
        >
          <Image source={icon} style={styles.icon} />
        </LinearGradient>

        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
