import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./Home";
import HomePage from "./HomePage";
import Discover from "./Discover";
import Player from "./Player";
import About from "./About";
import User from "./User";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const BottomNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarShowLabel: false,

          tabBarIcon: () => <Ionicons name="home-outline" size={20} />,
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => <Ionicons name="compass-outline" size={20} />,
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => <Ionicons name="heart-outline" size={20} />,
        }}
      />
      <Tab.Screen
        name="People"
        component={User}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => <Ionicons name="person-outline" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Player"
          component={Player}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
