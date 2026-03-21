import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
const categories = [
  {
    name: "Pizza",
    image: "https://images.unsplash.com/photo-1601924582975-7e7e7fdd4c2d",
  },
  {
    name: "Burgers",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    name: "Steak",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
  },
];

const foods = [
  {
    name: "Food 1",
    price: 1,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
  {
    name: "Food 2",
    price: 3,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* SEARCH */}
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search for meals or area"
            style={styles.input}
          />
        </View>

        {/* TOP CATEGORIES */}
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Top Categories</Text>
          <Text style={styles.filter}>Filter</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((item, index) => (
            <View key={index} style={styles.categoryItem}>
              <Image source={{ uri: item.image }} style={styles.categoryImg} />
              <Text>{item.name}</Text>
            </View>
          ))}
        </ScrollView>

        {/* POPULAR ITEMS */}
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {foods.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.foodImg} />
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.foodCountry}>By Viet Nam</Text>
              <Text style={styles.price}>{item.price}$</Text>
            </View>
          ))}
        </ScrollView>

        {/* POPULAR ITEMS 2 */}
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Popular Items</Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {foods.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.foodImg} />
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.price}>{item.price}$</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  searchBox: {
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    height: 40,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  filter: {
    color: "#FFA500",
  },
  viewAll: {
    color: "#FFA500",
  },

  categoryItem: {
    marginRight: 15,
    alignItems: "center",
  },
  categoryImg: {
    width: 100,
    height: 70,
    borderRadius: 10,
    marginBottom: 5,
  },

  card: {
    width: 140,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
  },
  foodImg: {
    width: "100%",
    height: 80,
    borderRadius: 10,
    marginBottom: 5,
  },
  foodName: {
    fontWeight: "bold",
  },
  foodCountry: {
    color: "#777",
    fontSize: 12,
  },
  price: {
    marginTop: 5,
    fontWeight: "bold",
  },

  bottomTab: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  tab: {
    color: "#888",
  },
  activeTab: {
    color: "#FF6B00",
    fontWeight: "bold",
  },
});
