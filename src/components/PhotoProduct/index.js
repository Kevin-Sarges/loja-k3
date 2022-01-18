import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

export function PhotoProduct(props) {
  return <Image source={props.image} style={styles.container} />;
}
