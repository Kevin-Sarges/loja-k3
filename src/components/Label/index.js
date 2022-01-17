import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function Label({ content }) {
  return (
    <View>
      <Text style={styles.label}>{content}</Text>
    </View>
  );
}
