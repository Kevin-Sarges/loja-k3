import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function PhotoProduct({ image }) {
  return <Image source={image} style={styles.container} />;
}
