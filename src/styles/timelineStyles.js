import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const timelineStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  content: {
    marginLeft: 8,
  },

  status: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.text,
  },

  time: {
    fontSize: 12,
    color: COLORS.gray,
  },
});
