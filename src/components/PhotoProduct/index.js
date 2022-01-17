import React from "react";
import { Image } from "react-native";

import Img from "../../assets/Images/sapatoImg.png";
import { styles } from "./styles";

export function PhotoProduct() {
  return <Image source={Img} style={styles.container} />;
}
