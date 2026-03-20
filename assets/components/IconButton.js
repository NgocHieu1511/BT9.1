import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function IconButton({ title, color }) {
  return (
    <TouchableOpacity style={[styles.btn, { backgroundColor: color }]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 5,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
