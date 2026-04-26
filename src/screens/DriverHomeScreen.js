import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { OrderContext } from "../context/OrderContext";
import { commonStyles } from "../styles/commonStyles";

export default function DriverHomeScreen({ navigation }) {
  const { orders, acceptOrder } = useContext(OrderContext);

  // Filter out delivered orders from the active view
  const activeOrders = orders.filter((o) => o.status !== "Delivered");

  const renderItem = ({ item }) => {
    const statusColor = getStatusColor(item.status);

    return (
      <View style={commonStyles.card}>
        {/* Card Header */}
        <View style={commonStyles.row}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="cube-outline" size={22} color="#2563EB" />
            <Text style={{ fontWeight: "bold", marginLeft: 6 }}>{item.id}</Text>
          </View>

          {/* Status Badge */}
          <View
            style={[
              commonStyles.badge || {
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 6,
              },
              { backgroundColor: statusColor },
            ]}
          >
            <Text
              style={commonStyles.badgeText || { color: "#fff", fontSize: 12 }}
            >
              {item.status}
            </Text>
          </View>
        </View>

        {/* Accept Action */}
        {item.status === "Open" && (
          <TouchableOpacity
            style={[
              commonStyles.buttonSecondary || commonStyles.button,
              { marginTop: 12 },
            ]}
            onPress={() => acceptOrder(item.id)}
          >
            <Text style={commonStyles.buttonText}>Accept Order</Text>
          </TouchableOpacity>
        )}

        {/* Navigation Action */}
        <TouchableOpacity
          style={[commonStyles.button, { marginTop: 10 }]}
          onPress={() =>
            navigation.navigate("OrderDetails", {
              orderId: item.id,
            })
          }
        >
          <Text style={commonStyles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={commonStyles.container}>
      {/* Empty State */}
      {activeOrders.length === 0 ? (
        <View style={commonStyles.centerContainer}>
          <Ionicons name="alert-circle-outline" size={40} color="#9CA3AF" />
          <Text style={{ marginTop: 10, color: "#6B7280" }}>
            No active orders
          </Text>
        </View>
      ) : (
        <FlatList
          data={activeOrders}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderItem}
          extraData={activeOrders} // Ensure FlatList re-renders when data changes
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

// Helper: Get status color
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
