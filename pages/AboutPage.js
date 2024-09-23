import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";

const AboutPage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.text}>About me</Text>
        <Image source={require("../assets/me-silo.jpeg")} style={styles.image} />
        <Text>
          Voluptate mollit ex nisi in ea eu aute minim proident. Do esse aliquip
          in ea ut elit sint Lorem. Adipisicing et officia est cupidatat
          excepteur. Eu minim culpa excepteur commodo occaecat veniam labore
          labore quis sit et cupidatat. Incididunt nisi eiusmod ullamco
          cupidatat aliquip dolore nulla culpa anim consequat excepteur
          reprehenderit eiusmod. Excepteur mollit ad velit anim fugiat consequat
          deserunt et. Laborum eu incididunt in voluptate non consectetur
          adipisicing eiusmod velit esse irure qui pariatur. Exercitation
          laboris laboris laborum ea. Nisi non nulla nulla consequat nisi veniam
          tempor dolore eiusmod. Eiusmod nisi non aute dolore anim cupidatat do
          adipisicing ut ex elit commodo occaecat ullamco. Laboris cupidatat
          excepteur tempor mollit labore sunt consectetur quis pariatur ut culpa
          cillum incididunt officia. Officia exercitation mollit laboris id
          dolor velit dolor nostrud fugiat mollit dolor labore id.
        </Text>
        <Button
          title="Go to Home Page"
          onPress={() => navigation.navigate("HomePage")}
        />
        <Button
          title="Go to the List Page"
          onPress={() => navigation.navigate("ListPage")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#E8EBE4",
    padding: 15,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "#676D61",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    paddingBottom: 15,
  },
  image: {
    width: "100%",
    height: 400,
    marginBottom: 15,
  },
});

export default AboutPage;
