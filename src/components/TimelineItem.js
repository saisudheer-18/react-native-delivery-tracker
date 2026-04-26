import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { COLORS } from "../styles/colors";
import { timelineStyles } from "../styles/timelineStyles";

export default function TimelineItem({ item }) {
  const getIcon = (status) => {
    switch (status) {
      case "Order Created":
        return "document-text-outline";
      case "Accepted":
        return "checkmark-circle-outline";
      case "Picked Up":
        return "location-outline";
      case "In Transit":
        return "car-outline";
      case "Delivered":
        return "checkmark-done-outline";
      default:
        return "ellipse-outline";
    }
  };

  const getColor = (status) => {
    switch (status) {
      case "Accepted":
        return COLORS.primary;
      case "Picked Up":
        return "#F59E0B";
      case "In Transit":
        return "#7C3AED";
      case "Delivered":
        return "#16A34A";
      default:
        return COLORS.gray;
    }
  };

  return (
    <View style={timelineStyles.container}>
      {/* Icon */}
      <Ionicons
        name={getIcon(item.status)}
        size={18}
        color={getColor(item.status)}
      />

      {/* Content */}
      <View style={timelineStyles.content}>
        <Text style={timelineStyles.status}>{item.status}</Text>

        <Text style={timelineStyles.time}>
          {new Date(item.time).toLocaleTimeString()}
        </Text>
      </View>
    </View>
  );
}
