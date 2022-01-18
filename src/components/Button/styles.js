import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 225,
    height: 44,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.color.secondary04,
    backgroundColor: theme.color.green,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: theme.color.white,
    fontFamily: theme.fonts.title,
    fontSize: 18,
  },
});
