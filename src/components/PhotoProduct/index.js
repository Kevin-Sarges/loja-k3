import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function PhotoProduct(props) {
  return <Image source={{ uri: props.image }} style={styles.container} />;
}
