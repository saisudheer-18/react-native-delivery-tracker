import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

import { commonStyles } from "../styles/commonStyles";
import { loginStyles } from "../styles/loginStyles";

export default function LoginScreen({ setRole }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (email.trim() === "driver@test.com" && password === "123456") {
        setRole("driver"); // Set driver role upon successful authentication
      } else if (email.trim() === "ops@test.com" && password === "123456") {
        setRole("operations"); // Set operations role upon successful authentication
      } else {
        setError("Invalid credentials");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <KeyboardAvoidingView
      style={commonStyles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={commonStyles.title}>TrackFlow</Text>

      <View style={loginStyles.card}>
        {/* Email */}
        <View style={loginStyles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#6B7280" />
          <TextInput
            placeholder="Email"
            style={loginStyles.input}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setError("");
            }}
            autoCapitalize="none"
          />
        </View>

        {/* Password */}
        <View style={loginStyles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#6B7280" />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={loginStyles.input}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setError("");
            }}
            onSubmitEditing={handleLogin} // Handle enter key submission
          />
        </View>

        {/* Error */}
        {error ? <Text style={loginStyles.error}>{error}</Text> : null}

        {/* Button */}
        <TouchableOpacity
          style={[commonStyles.button, { opacity: loading ? 0.7 : 1 }]}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={commonStyles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>

        {/* Hint */}
        <Text style={loginStyles.hint}>
          Driver: driver@test.com / 123456{"\n"}
          Ops: ops@test.com / 123456
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}
