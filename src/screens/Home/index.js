import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { Products } from "../../components/Products";
import { Label } from "../../components/Label";

import Logo from "../../assets/logo.png";
import { productsFake } from "../../utils/fakeData";
import { styles } from "./styles";

export function Home() {
  const navigation = useNavigation();
  const [category, setCategory] = useState("");

  function handleCategorySelect(categoryId) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleProduct() {
    navigation.navigate("Product");
  }

  return (
    <>
      <Header title="Loja K3" icon={Logo} />

      <View style={styles.container}>
        <View style={styles.filter}>
          <Label content="Filtrar Produtos" />
          <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelect}
          />
        </View>

        <View style={styles.products}>
          <Label content="Produtos" />

          <FlatList
            data={productsFake}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Products
                key={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                onPress={handleProduct}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 550 }}
          />
        </View>
      </View>
    </>
  );
}
