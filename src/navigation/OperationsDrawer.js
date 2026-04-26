import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";

// Screens
import OperationsDashboard from "../screens/OperationsDashboard";

const Drawer = createDrawerNavigator();

export default function OperationsDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#2563EB",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerActiveTintColor: "#2563EB",
        drawerInactiveTintColor: "#6B7280",
        drawerStyle: {
          width: 260,
        },
      }}
      // 🎨 Custom Sidebar Header
      drawerContent={(props) => (
        <View style={{ flex: 1 }}>
          {/* Header */}
          <View
            style={{
              height: 140,
              backgroundColor: "#2563EB",
              justifyContent: "center",
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
              TrackFlow
            </Text>
            <Text style={{ color: "#E5E7EB", marginTop: 5 }}>
              Operations Panel
            </Text>
          </View>

          {/* Default Drawer Items */}
          <View style={{ flex: 1 }}>{props.children}</View>
        </View>
      )}
    >
      {/* 📊 Dashboard */}
      <Drawer.Screen
        name="Dashboard"
        component={OperationsDashboard}
        options={{
          title: "Dashboard",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" size={size} color={color} />
          ),
        }}
      />

      {/* (Optional Future Screens) */}
      {/* You can add more later if needed */}
    </Drawer.Navigator>
  );
}
