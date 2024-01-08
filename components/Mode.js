import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
const billie = require("../assets/images/billie.jpg");
const Vector = require("../assets/images/Vector.png");
const Ellipse13 = require("../assets/images/Ellipse13.png");
const Moon = require("../assets/images/Moon.png");
const Sun = require("../assets/images/Sun.png");
const Ellipse14 = require("../assets/images/Ellipse14.png");
export default function Mode({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={billie} />
      <Image style={styles.image2} source={Vector} />
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          color: "#DADADA",
          paddingTop: 400,
        }}
      >
        Choose mode
      </Text>
      <View style={{ flexDirection: "row", gap: 60, marginTop: 30 }}>
        <Image style={styles.image3} source={Ellipse13} />

        <Image style={styles.image3} source={Ellipse14} />
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 110,
          marginTop: -50,
          paddingBottom: 60,
        }}
      >
        <Image style={styles.image3} source={Moon} />
        <Image style={styles.image3} source={Sun} />
      </View>
      <View style={{ flexDirection: "row", gap: 50, marginTop: -15 }}>
        <Text
          style={{
            fontSize: 17,

            color: "#DADADA",
          }}
        >
          Light Mode
        </Text>

        <Text
          style={{
            fontSize: 17,

            color: "#DADADA",
          }}
        >
          Dark Mode
        </Text>
      </View>
      <TouchableOpacity
        style={{ marginTop: 30 }}
        onPress={() => navigation.navigate("Register")}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}> Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: { width: 396, position: "absolute", height: 855 },
  image2: { marginTop: 60 },
  buttonText: {
    color: "#F6F6F6",
    fontSize: 24,
  },
  button: {
    backgroundColor: "#62CD5D",
    width: 329,
    height: 92,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
