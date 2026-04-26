import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const operationsStyles = StyleSheet.create({
  // 🔥 Outer wrapper (full screen)
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // 🔥 Centered content container (MAIN FIX)
  container: {
    flex: 1,
    width: "100%",
    maxWidth: 1100,
    alignSelf: "center",
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: COLORS.text,
  },

  card: {
    backgroundColor: COLORS.white,
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
    width: "100%",
    elevation: 3,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  orderId: {
    marginLeft: 8,
    fontWeight: "bold",
    fontSize: 16,
  },

  status: {
    fontWeight: "bold",
  },

  rowSmall: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  textSmall: {
    marginLeft: 6,
    color: COLORS.gray,
  },

  timelineTitle: {
    marginTop: 10,
    fontWeight: "bold",
  },
});
