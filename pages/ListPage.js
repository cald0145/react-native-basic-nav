import React from "react";
import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const data = [
  {
    id: "1",
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian Fiction",
    desc: "Depicts a dystopian future where a totalitarian regime controls every aspect of citizens' lives through constant surveillance and manipulation of truth.",
  },
  {
    id: "2",
    title: "Roadside Picnic",
    author: "Arkady Strugatsky",
    genre: "Science Fiction",
    desc: "Follows stalkers who venture into mysterious alien-visited zones to retrieve valuable artifacts, exploring the impact of incomprehensible extraterrestrial influence on human society.",
  },
  {
    id: "3",
    title: "Pale Blue Dot",
    author: "Carl Sagan",
    genre: "Popular Science / Philosophy",
    desc: "Reflects on humanity's place in the cosmos, inspired by a photograph of Earth taken from deep space, offering a humbling perspective on our planet's significance.",
  },
  {
    id: "4",
    title: "A Short History of Nearly Everything",
    author: "Bill Bryson",
    genre: "Popular Science / Popular Science",
    desc: "presents a layman-friendly overview of scientific discoveries and theories across various fields, from the Big Bang to human evolution.",
  },
  {
    id: "5",
    title: "BLAME!",
    author: "Tsutomu Nihei",
    genre: "Cyberpunk Manga / Science Fiction",
    desc: "Follows a silent protagonist's journey through a vast, dystopian megastructure, exploring themes of isolation and technological evolution in a visually striking cyberpunk world.",
  },
  {
    id: "6",
    title: "Philosophiæ Naturalis Principia Mathematica",
    author: "Isaac Newton",
    genre: "Scientific Treatise / Mathematics",
    desc: "Establishes the foundations of classical mechanics, presenting Newton's laws of motion and universal gravitation that revolutionized physics and mathematics.",
  },
];

const ListPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>List of my favourite books:</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.item}
            onPress={() =>
              navigation.navigate("BookInfo", {
                book: item.title,
                desc: item.desc,
                genre: item.genre,
              })
            }
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>{item.author}</Text>
          </Pressable>
        )}
      />

      <Button
        title="Go to Home Page"
        onPress={() => navigation.navigate("HomePage")}
      />
      <Button
        title="Go to the About Page"
        onPress={() => navigation.navigate("AboutPage")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EBE4",
    justifyContent: "center",
    paddingTop: 48,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: "#555F46",
    borderRadius: 25,
  },
  title: {
    fontSize: 25,
    color: "#000000",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  author: {
    fontSize: 15,
    color: "#E8EBE4",
  },
  header: {
    fontSize: 30,
    backgroundColor: "#E8EBE4",
    color: "#070d0d",
    textAlign: "center",
    fontWeight: "bold",
    margin: 10,
    color: "#676D61",
    fontStyle: "italic",
  },
});

export default ListPage;
