import React, { useState } from "react";
import { ScrollView } from "react-native";

import { Category } from "../Category";

import { categories } from "../../utils/categories";
import { styles } from "./styles";

export function CategorySelect(props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{ paddingRight: 16 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          icon={category.icon}
          title={category.name}
          checked={category.id === props.categorySelected}
          onPress={() => props.setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
}
