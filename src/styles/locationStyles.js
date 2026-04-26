import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const locationStyles = StyleSheet.create({
  container: {
    marginTop: 8,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    marginLeft: 6,
    fontSize: 14,
    color: COLORS.text,
  },

  timeText: {
    marginLeft: 6,
    fontSize: 12,
    color: COLORS.gray,
  },

  placeholder: {
    marginLeft: 6,
    fontSize: 13,
    color: COLORS.lightGray,
    fontStyle: "italic",
  },
});
