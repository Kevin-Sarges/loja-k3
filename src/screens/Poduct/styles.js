import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 34,
    paddingHorizontal: 21,
  },

  backgroundImage: {
    width: "100%",
    height: 300,
    marginBottom: 13,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "98%",
    height: 292,
    borderRadius: 8,
  },

  description: {
    marginTop: 29,
  },

  textDescription: {
    marginBottom: 29,
  },

  value: {
    fontFamily: theme.fonts.title,
    color: theme.color.green,
    marginBottom: 54,
  },

  footer: {
    paddingBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
