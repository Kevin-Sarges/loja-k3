import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  icon: {
    width: 60,
    height: 60,
  },

  title: {
    marginLeft: 20,
    fontSize: 18,
    fontFamily: theme.fonts.title,
    color: theme.color.white,
    textAlign: "center",
  },
});
