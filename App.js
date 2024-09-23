import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ListPage from "./pages/ListPage";
import BookInfo from "./pages/BookInfo";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="About" component={AboutPage} />
        <Stack.Screen name="List" component={ListPage} />
        <Stack.Screen name="Info" component={BookInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
