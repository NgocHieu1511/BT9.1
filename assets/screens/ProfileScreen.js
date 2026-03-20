import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header} />

      <View style={styles.info}>
        <Text style={styles.name}>Hung Nguyen</Text>
        <Text style={styles.bio}>Mobile Developer</Text>

        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: "#fff" }}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    height: 150,
    backgroundColor: "#00AEEF",
  },
  info: {
    alignItems: "center",
    marginTop: -40,
  },
  name: { fontSize: 20, fontWeight: "bold" },
  bio: { color: "gray", marginVertical: 5 },
  btn: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
});
