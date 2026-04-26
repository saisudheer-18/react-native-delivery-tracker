import { Platform, Text, View } from "react-native";

let MapView = null;
let Marker = null;

// ✅ Only load on mobile
if (Platform.OS !== "web") {
  const maps = require("react-native-maps");
  MapView = maps.default;
  Marker = maps.Marker;
}

export default function LiveMap({ location }) {
  if (!location) {
    return <Text>No location available</Text>;
  }

  // 🌐 WEB SAFE
  if (Platform.OS === "web") {
    return (
      <View>
        <Text>Map not supported on web</Text>
        <Text>
          {location.latitude}, {location.longitude}
        </Text>
      </View>
    );
  }

  return (
    <View style={{ height: 250, borderRadius: 10, overflow: "hidden" }}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={location} title="Driver" />
      </MapView>
    </View>
  );
}
