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
});
