import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { Header } from "../../components/Header";
import { Label } from "../../components/Label";
import { Button } from "../../components/Button";

import { theme } from "../../global/styles/theme";
import { productsFake } from "../../utils/fakeData";
import { styles } from "./styles";

export function Product() {
  const navigation = useNavigation();
  const { secondary05, secondary02 } = theme.color;

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

      <ScrollView style={styles.container}>
        {productsFake.map((item) => (
          <View key={item.id}>
            <LinearGradient
              style={styles.backgroundImage}
              colors={[secondary05, secondary02]}
            >
              <Image source={item.image} style={styles.image} />
            </LinearGradient>
            <Label content={item.name} />

            <View style={styles.description}>
              <Label content="Descrição" />
              <Text style={styles.textDescription}>{item.description}</Text>
            </View>

            <View>
              <Label content="Valor" />
              <Text style={styles.value}>{item.price}</Text>
            </View>

            <View style={styles.footer}>
              <Button />
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
}
