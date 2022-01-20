import React, { useState } from "react";
import { View, FlatList, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { Products } from "../../components/Products";
import { Label } from "../../components/Label";
import { Load } from "../../components/Load";

import Logo from "../../assets/logo.png";
import { productsFake } from "../../utils/fakeData";
import { styles } from "./styles";

export function Home() {
  const navigation = useNavigation();
  const [categorySelect, setCategorySelect] = useState("");
  const [loading, setLoading] = useState(false);

  function handleCategorySelect(categoryId) {
    categoryId === categorySelect
      ? setCategorySelect("")
      : setCategorySelect(categoryId);
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
            categorySelected={categorySelect}
            setCategory={handleCategorySelect}
          />
        </View>

        {loading ? (
          <Load />
        ) : (
          <View style={styles.products}>
            <Label content="Produtos" />

            {categorySelect ? (
              <FlatList
                data={productsFake}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                  categorySelect === item.category ? (
                    <Products
                      key={item.id}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                      onPress={() => handleProduct(item)}
                    />
                  ) : (
                    categorySelect === ""
                  )
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 550 }}
              />
            ) : (
              <FlatList
                data={productsFake}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Products
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    onPress={() => handleProduct(item)}
                  />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 550 }}
              />
            )}
          </View>
        )}
      </View>
    </>
  );
}
