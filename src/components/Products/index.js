import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { BackgroundContainer } from "../BackgroundContainer";
import { PhotoProduct } from "../PhotoProduct";
import { styles } from "./styles";

export function Products({ name, price }) {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.container}>
        <BackgroundContainer>
          <PhotoProduct />
        </BackgroundContainer>

        <View style={styles.content}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            valor: <Text style={styles.t}>{price}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
