import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 13,
    paddingBottom: 12,
    flexDirection: "row",
    borderBottomColor: theme.color.secondary04,
    borderBottomWidth: 1,
  },

  content: {
    paddingLeft: 33,
    alignSelf: "center",
  },

  title: {
    marginBottom: 42,
    fontSize: 18,
    fontFamily: theme.fonts.title,
    color: theme.color.black,
  },

  subtitle: {
    color: theme.color.black,
  },

  t: {
    fontFamily: theme.fonts.title,
    color: theme.color.green,
  },
});
