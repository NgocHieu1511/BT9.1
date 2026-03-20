import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CustomTextInput from "../components/CustomTextInput";
import IconButton from "../components/IconButton";

export default function SignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <CustomTextInput placeholder="Email" />
      <CustomTextInput placeholder="Password" secure={true} />

      <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
        <Text style={styles.forgot}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signInBtn}
        onPress={() => navigation.replace("Main")}
      >
        <Text style={{ color: "#fff" }}>Sign In</Text>
      </TouchableOpacity>

      <Text style={{ textAlign: "center", marginVertical: 10 }}>
        Or sign in with
      </Text>

      <IconButton title="Google" bgColor="#DB4437" />
      <IconButton title="Facebook" bgColor="#4267B2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  forgot: { color: "orange", textAlign: "right", marginVertical: 5 },
  signInBtn: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
});
