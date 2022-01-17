import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderColor: theme.color.secondary04,
  },

  content: {
    width: 110,
    height: 110,
    paddingVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
  },

  icon: {
    width: 50,
    height: 50,
  },

  title: {
    marginTop: -20,
    color: theme.color.white,
  },
});
