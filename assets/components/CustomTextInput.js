import { View, TextInput, StyleSheet } from "react-native";

export default function CustomTextInput({ placeholder, secure }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secure ? true : false} // ✅ FIX LỖI BOOLEAN
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
  },
});
