import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    paddingHorizontal: 21,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: theme.color.secondary04,
    borderWidth: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  icon: {
    width: 55,
    height: 55,
  },

  title: {
    fontSize: 18,
    fontFamily: theme.fonts.title,
    color: theme.color.white,
  },
});
