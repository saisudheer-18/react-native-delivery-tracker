import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DriverHomeScreen from "../screens/DriverHomeScreen";
import LoginScreen from "../screens/LoginScreen";
import OperationsDashboard from "../screens/OperationsDashboard";
import OrderDetailsScreen from "../screens/OrderDetailsScreen.web";

const Stack = createNativeStackNavigator();

// Application Theme Configuration
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2563EB",
    background: "#F9FAFB",
    card: "#2563EB",
    text: "#111827",
  },
};

// Default Screen Options
const screenOptions = {
  headerStyle: {
    backgroundColor: "#2563EB",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTitleAlign: "center",
  animation: "slide_from_right",
  gestureEnabled: true, // Enable swipe back gesture
};

export default function AppNavigator() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        {/* Driver Flow */}
        <Stack.Screen
          name="DriverHome"
          component={DriverHomeScreen}
          options={{
            title: "Driver Dashboard",
            gestureEnabled: false, // Prevent navigating back to the login screen
          }}
        />

        {/* Order Details Screen */}
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetailsScreen}
          options={{ title: "Order Details" }}
        />

        {/* Operations Flow */}
        <Stack.Screen
          name="OperationsDashboard"
          component={OperationsDashboard}
          options={{
            title: "Operations Dashboard",
            gestureEnabled: false, // Prevent navigating back to the login screen
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
