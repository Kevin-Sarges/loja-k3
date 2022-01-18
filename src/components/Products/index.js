import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { BackgroundContainer } from "../BackgroundContainer";
import { PhotoProduct } from "../PhotoProduct";
import { styles } from "./styles";

export function Products(props) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...props}>
      <View style={styles.container}>
        <BackgroundContainer>
          <PhotoProduct image={props.image} />
        </BackgroundContainer>

        <View style={styles.content}>
          <Text style={styles.title}>{props.name}</Text>
          <Text style={styles.subtitle}>
            valor: <Text style={styles.t}>{props.price}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
