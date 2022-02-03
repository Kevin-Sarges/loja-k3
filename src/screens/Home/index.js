import React, { useContext, useCallback } from "react";
import { View, FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { Products } from "../../components/Products";
import { Label } from "../../components/Label";
import { Load } from "../../components/Load";

import Logo from "../../assets/logo.png";
import { AuthContex } from "../../context/auth";
import { styles } from "./styles";

export function Home() {
  const navigation = useNavigation();
  const {
    products,
    loading,
    categorySelect,
    handleCategorySelect,
    listProduct,
  } = useContext(AuthContex);

  function handleProduct(product) {
    navigation.navigate("Product", { product });
  }

  useFocusEffect(
    useCallback(() => {
      listProduct();
    }, [products])
  );

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
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                  categorySelect === item.category__product ? (
                    <Products
                      key={item.id}
                      image={item.url_image_product}
                      name={item.name_product}
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
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Products
                    key={item.id}
                    image={item.url_image_product}
                    name={item.name_product}
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
