import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function Label(props) {
  return (
    <View>
      <Text style={styles.label}>{props.content}</Text>
    </View>
  );
}
