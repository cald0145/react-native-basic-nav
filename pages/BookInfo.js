import React from "react";
import { SafeAreaView, Text, Image, StyleSheet } from "react-native";

const BookInfo = ({ route }) => {
  const { book } = route.params;
  const { desc } = route.params;
  const { genre } = route.params;

  const bookData = {
    1984: require("../assets/books-covers/1984 First Edition Cover.jpg"),
    "Roadside Picnic": require("../assets/books-covers/roadside picnic cover.jpg"),
    "Pale Blue Dot": require("../assets/books-covers/pale blue dot.jpg"),
    "A Short History of Nearly Everything": require("../assets/books-covers/a short history cover.jpg"),
    "BLAME!": require("../assets/books-covers/blame manga cover.jpg"),
    "Philosophiæ Naturalis Principia Mathematica": require("../assets/books-covers/Prinicipia cover.png"),
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Book Title: {book}</Text>
      <Text style={styles.text}>Genre: {genre}</Text>
      <Text style={styles.text}>Description: {desc}</Text>
      <Image source={bookData[book]} style={styles.image} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default BookInfo;
