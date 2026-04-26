import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import { COLORS } from "../styles/colors";
import { commonStyles } from "../styles/commonStyles";
import LocationView from "./LocationView";
import TimelineItem from "./TimelineItem";

export default function OrderCard({ order, onPress, onDelete }) {
  // 🎨 Status Color
  const getStatusColor = (status) => {
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

  // 👉 Swipe Right Action (Delete)
  const renderRightActions = () => (
    <View
      style={{
        backgroundColor: COLORS.danger,
        justifyContent: "center",
        alignItems: "center",
        width: 90,
        borderRadius: 10,
        marginVertical: 5,
      }}
    >
      <Ionicons name="trash-outline" size={22} color="#fff" />
      <Text style={{ color: "#fff", fontSize: 12 }}>Delete</Text>
    </View>
  );

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      onSwipeableOpen={onDelete} // 🔥 trigger delete
    >
      <Pressable
        onPress={onPress} // 👉 Tap
        onLongPress={() => console.log("Long pressed:", order.id)} // 👉 Long press
        style={({ pressed }) => [
          commonStyles.card,
          {
            transform: [{ scale: pressed ? 0.97 : 1 }], // 🔥 press animation
          },
        ]}
      >
        {/* 🔹 Header */}
        <View style={commonStyles.row}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="cube-outline" size={22} color={COLORS.primary} />
            <Text style={{ marginLeft: 8, fontWeight: "bold", fontSize: 16 }}>
              {order.id}
            </Text>
          </View>

          <Text
            style={{
              fontWeight: "bold",
              color: getStatusColor(order.status),
            }}
          >
            {order.status}
          </Text>
        </View>

        {/* 🔹 Driver Info */}
        {order.assignedDriverId && (
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Ionicons name="person-outline" size={18} color={COLORS.gray} />
            <Text style={{ marginLeft: 5 }}>
              Driver: {order.assignedDriverId}
            </Text>
          </View>
        )}

        {/* 🔹 Location */}
        <LocationView location={order.driverLocation} />

        {/* 🔹 Tracking Indicator */}
        {order.status === "Picked Up" && (
          <Text style={{ color: "#F59E0B", marginTop: 5 }}>
            🚀 Tracking Active...
          </Text>
        )}

        {/* 🔹 Timeline */}
        <Text style={{ marginTop: 10, fontWeight: "bold" }}>Timeline</Text>

        {order.timeline.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </Pressable>
    </Swipeable>
  );
}
