import React, { useState } from "react";
import { ScrollView } from "react-native";

import { Category } from "../Category";

import { categories } from "../../utils/categories";
import { styles } from "./styles";

export function CategorySelect({ categorySelected, setCategory }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{ paddingRight: 21 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          icon={category.icon}
          title={category.name}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}
