import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { OrderProvider } from "./src/context/OrderContext";
import DriverHomeScreen from "./src/screens/DriverHomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import OperationsDashboard from "./src/screens/OperationsDashboard";
import OrderDetailsScreen from "./src/screens/OrderDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [role, setRole] = useState(null);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <OrderProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: true }}>
            {!role ? (
              <Stack.Screen name="Login">
                {(props) => <LoginScreen {...props} setRole={setRole} />}
              </Stack.Screen>
            ) : role === "driver" ? (
              <>
                <Stack.Screen name="Home" component={DriverHomeScreen} />
                <Stack.Screen
                  name="OrderDetails"
                  component={OrderDetailsScreen}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="OperationsDashboard"
                  component={OperationsDashboard}
                />
                <Stack.Screen
                  name="OrderDetails"
                  component={OrderDetailsScreen}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </OrderProvider>
    </GestureHandlerRootView>
  );
}
