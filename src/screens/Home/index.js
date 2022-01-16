import React from "react";
import { View, Text } from "react-native";

import { Header } from "../../components/Header";

import Logo from "../../assets/logo.png";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Header title="Loja K3" icon={Logo} />
      <Text>Home</Text>
    </View>
  );
}
