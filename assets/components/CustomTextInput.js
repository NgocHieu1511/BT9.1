import { View, TextInput, StyleSheet } from "react-native";

export default function CustomTextInput({
  placeholder,
  secure,
  value,
  onChangeText,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secure ? true : false}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
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
    borderColor: "black",
    borderRadius: 8,
    marginVertical: 10,
    padding: 20,
  },
});
