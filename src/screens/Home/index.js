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
  const [category, setCategory] = useState("1");

  function handleCategorySelect(categoryId) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleProduct(product) {
    navigation.navigate("Product", { product });
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
            renderItem={({ item }) =>
              category === item.category ? (
                <Products
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  onPress={() => handleProduct(item)}
                />
              ) : (
                category === ""
              )
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 550 }}
          />
        </View>
      </View>
    </>
  );
}
