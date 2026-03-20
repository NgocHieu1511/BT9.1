import { View, Text, FlatList, StyleSheet } from "react-native";

const data = [
  { id: "1", name: "Pizza" },
  { id: "2", name: "Burger" },
  { id: "3", name: "Steak" },
];

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={styles.search}>
        <Text>Search...</Text>
      </View>

      <Text style={styles.title}>Top Categories</Text>
      <FlatList
        horizontal={true} // ✅ BOOLEAN ĐÚNG
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
          </View>
        )}
      />

      <Text style={styles.title}>Popular Items</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    marginVertical: 10,
  },
  item: {
    backgroundColor: "#ddd",
    padding: 15,
    marginRight: 10,
    borderRadius: 8,
  },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
  },
});
