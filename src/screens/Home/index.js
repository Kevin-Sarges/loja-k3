import React from "react";
import { View, FlatList } from "react-native";

import { CategorySelect } from "../../components/CategorySelect";
import { Products } from "../../components/Products";
import { Label } from "../../components/Label";

import { productsFake } from "../../utils/fakeData";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <Label content="Filtrar Produtos" />
        <CategorySelect />
      </View>

      <View style={styles.products}>
        <Label content="Produtos" />

        <FlatList
          data={productsFake}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Products key={item.id} name={item.name} price={item.price} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 500 }}
        />
      </View>
    </View>
  );
}
