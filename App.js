import React from "react";
import { StatusBar } from "react-native";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { AuthProvider } from "./src/context/auth";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AuthProvider>
      <StatusBar />
      <Routes />
    </AuthProvider>
  );
}
