import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const Vector = require("../assets/images/Vector.png");

export default function First({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Home")}
    >
      <View>
        <Image source={Vector} />

        <Text
          style={{
            fontStyle: "italic",
            justifyContent: "center",
            alignSelf: "center",
            fontSize: 15,
          }}
        >
          By Laja
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
  },
});
