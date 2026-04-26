import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { COLORS } from "../styles/colors";
import { locationStyles } from "../styles/locationStyles";

export default function LocationView({ location }) {
  if (!location) {
    return (
      <View style={locationStyles.row}>
        <Ionicons name="location-outline" size={18} color={COLORS.lightGray} />
        <Text style={locationStyles.placeholder}>No location available</Text>
      </View>
    );
  }

  const { latitude, longitude, updatedAt } = location;

  const formattedTime = updatedAt
    ? new Date(updatedAt).toLocaleTimeString()
    : null;

  return (
    <View style={locationStyles.container}>
      {/* Location */}
      <View style={locationStyles.row}>
        <Ionicons name="location-outline" size={18} color={COLORS.red} />
        <Text style={locationStyles.text}>
          {latitude.toFixed(4)}, {longitude.toFixed(4)}
        </Text>
      </View>

      {/* Updated Time */}
      {formattedTime && (
        <View style={[locationStyles.row, { marginTop: 4 }]}>
          <Ionicons name="time-outline" size={14} color={COLORS.gray} />
          <Text style={locationStyles.timeText}>
            Updated at {formattedTime}
          </Text>
        </View>
      )}
    </View>
  );
}
