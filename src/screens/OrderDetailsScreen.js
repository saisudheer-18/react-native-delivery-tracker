import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { OrderContext } from "../context/OrderContext";
import { commonStyles } from "../styles/commonStyles";

export default function OrderDetailsScreen({ route }) {
  const { orderId } = route.params;

  const { orders, moveToNextStatus } = useContext(OrderContext);

  const order = orders.find((o) => String(o.id) === String(orderId));

  if (!order) {
    return (
      <View style={commonStyles.container}>
        <Text>Order not found</Text>
      </View>
    );
  }

  const updateStatus = () => {
    moveToNextStatus(orderId);
  };

  return (
    <View style={commonStyles.container}>
      {/* Order ID Display */}
      <Text style={commonStyles.title}>{order.id}</Text>

      {/* Status Display */}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Ionicons name="information-circle-outline" size={18} color="#2563EB" />
        <Text style={{ marginLeft: 5 }}>
          Status:{" "}
          <Text
            style={{ fontWeight: "bold", color: getStatusColor(order.status) }}
          >
            {order.status}
          </Text>
        </Text>
      </View>

      {/* Location Display */}
      {order.driverLocation?.latitude ? (
        <View style={{ marginTop: 12 }}>
          <Text>
            📍 {order.driverLocation.latitude.toFixed(4)},{" "}
            {order.driverLocation.longitude.toFixed(4)}
          </Text>

          <Text style={{ color: "#6B7280", fontSize: 12 }}>
            Map not supported on web
          </Text>

          <Text style={{ color: "#6B7280", fontSize: 12 }}>
            Updated: {formatTime(order.driverLocation.updatedAt)}
          </Text>
        </View>
      ) : (
        <Text style={{ marginTop: 12, color: "#6B7280" }}>
          Driver location not available yet
        </Text>
      )}

      {/* Action Button */}
      {order.status !== "Open" && (
        <TouchableOpacity
          style={[
            commonStyles.button,
            { marginTop: 20, opacity: order.status === "Delivered" ? 0.6 : 1 },
          ]}
          onPress={updateStatus}
          disabled={order.status === "Delivered"}
        >
          <Text style={commonStyles.buttonText}>
            {order.status === "Delivered"
              ? "Completed"
              : getNextLabel(order.status)}
          </Text>
        </TouchableOpacity>
      )}

      {/* Timeline */}
      <Text style={{ marginTop: 20, fontWeight: "bold" }}>Timeline</Text>

      {order.timeline.map((item, index) => (
        <View key={index} style={{ flexDirection: "row", marginTop: 6 }}>
          <Ionicons name="time-outline" size={16} color="#6B7280" />
          <Text style={{ marginLeft: 5 }}>
            {item.status} - {formatTime(item.time)}
          </Text>
        </View>
      ))}
    </View>
  );
}

// Helper: Get status color mapping
const getStatusColor = (status) => {
  switch (status) {
    case "Accepted":
      return "#2563EB";
    case "Picked Up":
      return "#F59E0B";
    case "In Transit":
      return "#7C3AED";
    case "Delivered":
      return "#16A34A";
    default:
      return "#6B7280";
  }
};

// Helper: Get button label based on next status
const getNextLabel = (status) => {
  switch (status) {
    case "Accepted":
      return "Mark as Picked Up";
    case "Picked Up":
      return "Start Transit";
    case "In Transit":
      return "Mark as Delivered";
    default:
      return "Next";
  }
};

// Helper: Format timestamp
const formatTime = (time) => {
  return new Date(time)
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
    .toLowerCase();
};
