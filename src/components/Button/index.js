import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export function Button(props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...props}>
      <Text style={styles.text}>Comprar</Text>
    </TouchableOpacity>
  );
}
