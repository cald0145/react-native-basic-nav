import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  Button,
  StyleSheet,
  View,
} from "react-native";

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Welcome to my Library Home Page!</Text>
      </View>
      <Image source={require("../assets/books.jpeg")} style={styles.image} />

      <Button
        title="Go to the About Page"
        onPress={() => navigation.navigate("About")}
      ></Button>
      <Button
        title="Go to my book list Page"
        onPress={() => navigation.navigate("List")}
      ></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EBE4",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 48,
  },
  text: {
    fontSize: 30,
    backgroundColor: "#E8EBE4",
    color: "#676D61",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    paddingBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default HomePage;
