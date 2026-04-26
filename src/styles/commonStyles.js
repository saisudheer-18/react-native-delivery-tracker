import { Platform, StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const commonStyles = StyleSheet.create({
  // 📦 Containers
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },

  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
    padding: 20,
  },

  // 📝 Text
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: COLORS.primary,
    textAlign: "center",
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 16,
    color: COLORS.gray,
    marginBottom: 10,
  },

  text: {
    color: COLORS.text,
    fontSize: 14,
  },

  smallText: {
    fontSize: 12,
    color: COLORS.gray,
  },

  // 🧾 Input
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: COLORS.white,
  },

  // 🔘 Buttons
  button: {
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },

  buttonSecondary: {
    backgroundColor: "#10B981",
    padding: 14,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },

  buttonDisabled: {
    backgroundColor: "#9CA3AF",
  },

  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16,
  },

  // 🧱 Card (modern shadow fix)
  card: {
    backgroundColor: COLORS.white,
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,

    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    // Android shadow
    elevation: 3,

    // Web support
    ...(Platform.OS === "web" && {
      boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
    }),
  },

  // 📐 Layout
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 10,
  },

  // 🎯 Status Badge (NEW)
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },

  // 🗺️ Map container (NEW)
  mapContainer: {
    marginTop: 15,
    borderRadius: 12,
    overflow: "hidden",
  },

  // ⏱ Timeline item (NEW)
  timelineItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
});
