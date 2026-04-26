import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { OrderContext } from "../context/OrderContext";
import { commonStyles } from "../styles/commonStyles";

export default function OrderDetailsScreen({ route }) {
  const { orderId } = route.params;

  const { orders, moveToNextStatus } = useContext(OrderContext);

  const order = orders.find((o) => String(o.id) === String(orderId));

  // ❌ Order not found
  if (!order) {
    return (
      <View style={commonStyles.container}>
        <Text>Order not found</Text>
      </View>
    );
  }

  // 🔄 Update status
  const updateStatus = () => {
    moveToNextStatus(order.id);
  };

  return (
    <View style={commonStyles.container}>
      {/* 📦 Order ID */}
      <Text style={commonStyles.title}>{order.id}</Text>

      {/* 📊 Status */}
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Ionicons name="information-circle-outline" size={18} color="#2563EB" />
        <Text style={{ marginLeft: 6 }}>
          Status:{" "}
          <Text
            style={{
              fontWeight: "bold",
              color: getStatusColor(order.status),
            }}
          >
            {order.status}
          </Text>
        </Text>
      </View>

      {/* 📍 LOCATION (SAFE FIX) */}
      {order.driverLocation?.latitude ? (
        <View style={{ marginTop: 14 }}>
          <Text>
            📍 {order.driverLocation.latitude.toFixed(4)},{" "}
            {order.driverLocation.longitude.toFixed(4)}
          </Text>

          <Text style={{ fontSize: 12, color: "#6B7280", marginTop: 4 }}>
            Map not supported on web
          </Text>

          <Text style={{ fontSize: 12, color: "#6B7280" }}>
            Updated: {formatTime(order.driverLocation.updatedAt)}
          </Text>
        </View>
      ) : (
        <Text style={{ marginTop: 14, color: "#6B7280" }}>
          Waiting for driver location...
        </Text>
      )}

      {/* 🔄 ACTION BUTTON */}
      {order.status !== "Open" && (
        <TouchableOpacity
          style={[
            commonStyles.button,
            {
              marginTop: 20,
              opacity: order.status === "Delivered" ? 0.6 : 1,
            },
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

      {/* ⏱ TIMELINE */}
      <Text style={{ marginTop: 24, fontWeight: "bold", fontSize: 16 }}>
        Timeline
      </Text>

      {order.timeline?.length === 0 && (
        <Text style={{ marginTop: 6, color: "#6B7280" }}>No updates yet</Text>
      )}

      {order.timeline?.map((item, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            marginTop: 8,
            alignItems: "center",
          }}
        >
          <Ionicons name="time-outline" size={16} color="#6B7280" />

          <Text style={{ marginLeft: 6 }}>
            {item.status} - {formatTime(item.time)}
          </Text>
        </View>
      ))}
    </View>
  );
}

// 🎯 STATUS COLOR
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

// 🔄 BUTTON LABEL
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

// 🕒 TIME FORMAT
const formatTime = (time) => {
  if (!time) return "--";
  return new Date(time)
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
    .toLowerCase();
};
