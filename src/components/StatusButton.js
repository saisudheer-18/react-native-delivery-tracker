import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

import { COLORS } from "../styles/colors";
import { commonStyles } from "../styles/commonStyles";

const statusFlow = ["Accepted", "Picked Up", "In Transit", "Delivered"];

export default function StatusButton({ status, onPress }) {
  const currentIndex = statusFlow.indexOf(status);
  const nextStatus = statusFlow[currentIndex + 1];

  // ❌ If already delivered → hide button
  if (!nextStatus) return null;

  // 🎨 Button Color
  const getColor = () => {
    switch (nextStatus) {
      case "Picked Up":
        return "#F59E0B"; // orange
      case "In Transit":
        return "#7C3AED"; // purple
      case "Delivered":
        return "#16A34A"; // green
      default:
        return COLORS.primary;
    }
  };

  // 🎯 Icon based on next step
  const getIcon = () => {
    switch (nextStatus) {
      case "Picked Up":
        return "location-outline";
      case "In Transit":
        return "car-outline";
      case "Delivered":
        return "checkmark-done-outline";
      default:
        return "arrow-forward-outline";
    }
  };

  return (
    <TouchableOpacity
      style={[
        commonStyles.button,
        {
          backgroundColor: getColor(),
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        },
      ]}
      onPress={onPress}
    >
      <Ionicons name={getIcon()} size={18} color="#fff" />
      <Text style={[commonStyles.buttonText, { marginLeft: 6 }]}>
        Move to {nextStatus}
      </Text>
    </TouchableOpacity>
  );
}
