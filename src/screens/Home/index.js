import React, { useState } from "react";
import { View, Text } from "react-native";

import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";

import Logo from "../../assets/logo.png";

import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState("");

  function handleCategorySelect(categoryId) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <View style={styles.container}>
      <Header title="Loja K3" icon={Logo} />

      <View style={styles.filter}>
        <Text style={styles.label}>Filtrar Produtos: </Text>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      </View>
    </View>
  );
}
