import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const loginStyles = StyleSheet.create({
  card: {
    width: "100%",
    maxWidth: 420,
    alignSelf: "center",

    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 12,

    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: COLORS.white,
  },

  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 14,
    outlineStyle: "none", // web fix
  },

  error: {
    color: "#EF4444",
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "500",
  },

  hint: {
    marginTop: 20,
    textAlign: "center",
    color: COLORS.gray,
    fontSize: 13,
  },
});
