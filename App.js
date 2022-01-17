import React from "react";
import { StatusBar } from "react-native";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import { Header } from "./src/components/Header";
import { Routes } from "./src/routes";

import Logo from "./src/assets/logo.png";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar />
      <Header title="Loja K3" icon={Logo} />
      <Routes />
    </>
  );
}
