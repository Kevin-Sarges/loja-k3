import React from "react";
import { TouchableOpacity, ScrollView, Image, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { Header } from "../../components/Header";
import { Label } from "../../components/Label";
import { Button } from "../../components/Button";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function Product() {
  const route = useRoute();
  const navigation = useNavigation();

  const { secondary05, secondary02 } = theme.color;
  const { product } = route.params;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <>
      <Header title="Produto" icon={null}>
        <TouchableOpacity onPress={handleGoBack} activeOpacity={0.5}>
          <AntDesign name="arrowleft" size={35} color="white" />
        </TouchableOpacity>
      </Header>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <LinearGradient
          style={styles.backgroundImage}
          colors={[secondary05, secondary02]}
        >
          <Image source={product.image} style={styles.image} />
        </LinearGradient>
        <Label content={product.name} />

        <View style={styles.description}>
          <Label content="Descrição" />
          <Text style={styles.textDescription}>{product.description}</Text>
        </View>

        <View>
          <Label content="Valor" />
          <Text style={styles.value}>{product.price}</Text>
        </View>

        <View style={styles.footer}>
          <Button />
        </View>
      </ScrollView>
    </>
  );
}
