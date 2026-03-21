import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export default function SignInScreen({ navigation, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "123456") {
      setIsLoggedIn(true);
    } else {
      alert("Sai tài khoản hoặc mật khẩu");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.content}>
        <Text style={styles.label}>Email ID</Text>
        <CustomTextInput
          placeholder="Enter your email here!"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <CustomTextInput
          placeholder="Enter your password here!"
          secure={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or sign in with</Text>

        <View style={styles.social}>
          <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
            <FontAwesome name="google" size={18} color="#DB4437" />
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.socialButton, styles.facebookButton]}
          >
            <Ionicons name="logo-facebook" size={20} color="#fff" />
            <Text style={styles.facebookText}>Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupContainer}>
          <Text>Not yet a member? </Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    marginTop: 10,
  },
  forgotPassword: {
    color: "#FFA500",
    textAlign: "right",
    marginTop: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FFA500",
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },
  orText: {
    textAlign: "center",
    marginBottom: 15,
    color: "#555",
  },
  social: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  socialButton: {
    flex: 0.48,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  googleButton: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#CCC",
  },
  facebookButton: {
    backgroundColor: "#4E71B1",
  },
  googleText: {
    color: "#000",
    fontWeight: "bold",
  },
  facebookText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupLink: {
    color: "#FFA500",
    fontWeight: "bold",
  },
});
