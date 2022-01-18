import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BackgroundContainer } from "../BackgroundContainer";
import { PhotoProduct } from "../PhotoProduct";
import { styles } from "./styles";

export function Products({ name, price, image }) {
  const navigation = useNavigation();

  function handleProduct() {
    navigation.navigate("Product");
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handleProduct}>
      <View style={styles.container}>
        <BackgroundContainer>
          <PhotoProduct image={image} />
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
