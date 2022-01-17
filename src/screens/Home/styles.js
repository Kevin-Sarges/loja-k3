import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  filter: {
    paddingLeft: 21,
  },

  label: {
    marginBottom: 14,
    fontSize: 18,
    fontFamily: theme.fonts.title,
    color: theme.color.black,
  },
});
