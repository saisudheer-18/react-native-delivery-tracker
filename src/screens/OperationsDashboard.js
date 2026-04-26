import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import { OrderContext } from "../context/OrderContext";
import { operationsStyles as styles } from "../styles/operationsStyles";

export default function OperationsDashboard({ navigation }) {
  const { orders, deleteOrder } = useContext(OrderContext);

  // Helper: Determine status color
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

  // Handle order deletion
  const handleDelete = (id) => {
    deleteOrder(id);
  };

  // Render swipe-to-delete action
  const renderRightActions = () => (
    <View
      style={{
        backgroundColor: "#DC2626",
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

  // Render individual order card
  const renderItem = ({ item }) => (
    <Swipeable
      renderRightActions={renderRightActions}
      onSwipeableOpen={() => handleDelete(item.id)}
    >
      <Pressable
        onPress={() =>
          navigation.navigate("OrderDetails", {
            orderId: item.id, // Pass orderId instead of full object to avoid stale data
          })
        }
        style={({ pressed }) => [
          styles.card,
          {
            transform: [{ scale: pressed ? 0.97 : 1 }],
          },
        ]}
      >
        {/* Header */}
        <View style={styles.row}>
          <View style={styles.row}>
            <Ionicons name="cube-outline" size={22} color="#2563EB" />
            <Text style={styles.orderId}>{item.id}</Text>
          </View>

          <Text style={[styles.status, { color: getStatusColor(item.status) }]}>
            {item.status}
          </Text>
        </View>

        {/* Display Driver Location */}
        {item.driverLocation && (
          <View style={[styles.rowSmall, { marginTop: 10 }]}>
            <Ionicons name="location-outline" size={16} color="red" />
            <Text style={styles.textSmall}>
              {item.driverLocation.latitude.toFixed(4)},{" "}
              {item.driverLocation.longitude.toFixed(4)}
            </Text>
          </View>
        )}

        {/* Display Order Timeline */}
        <Text style={styles.timelineTitle}>Timeline</Text>

        {item.timeline?.map((t, i) => (
          <View key={i} style={styles.rowSmall}>
            <Ionicons name="time-outline" size={16} color="#6B7280" />
            <Text style={styles.textSmall}>
              {t.status} -{" "}
              {new Date(t.time)
                .toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
                .toLowerCase()}
            </Text>
          </View>
        ))}
      </Pressable>
    </Swipeable>
  );

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>All Orders</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        extraData={orders} // Ensure FlatList re-renders on state change
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
