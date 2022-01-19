import React, { useState } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { BackgroundContainer } from "../BackgroundContainer";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function Category(props) {
  const { secondary01, secondary03, secondary04, secondary05 } = theme.color;

  return (
    <TouchableOpacity activeOpacity={0.7} {...props}>
      <BackgroundContainer>
        <LinearGradient
          style={[styles.content, { opacity: props.checked ? 1 : 0.4 }]}
          colors={[props.checked ? secondary01 : secondary03, secondary04]}
        >
          <Image source={props.icon} style={styles.icon} />
        </LinearGradient>

        <Text style={styles.title}>{props.title}</Text>
      </BackgroundContainer>
    </TouchableOpacity>
  );
}
