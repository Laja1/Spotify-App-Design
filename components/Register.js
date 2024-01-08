import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
const master = require("../assets/images/master.png");
const Vector = require("../assets/images/Vector.png");
const Union = require("../assets/images/Union.png");

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image2} source={Vector} />
      <Text style={{ fontSize: 26, alignSelf: "center", padding: 5 }}>
        Enjoy listening to music
      </Text>
      <Text
        style={{
          fontSize: 17,
          alignSelf: "center",
          padding: 5,
          color: "#797979",
        }}
      >
        Spotify is a proprietary Swedish audio {"\n"}streaming and media
        services provider
      </Text>
      <View style={{ flexDirection: "row", gap: 30, alignSelf: "center" }}>
        <TouchableOpacity
          style={{ marginTop: 30 }}
          onPress={() => navigation.navigate("Reg")}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}> Register</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 30 }}
          onPress={() => navigation.navigate("SignIn")}
        >
          <View style={styles.button2}>
            <Text style={styles.buttonText2}> Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Image style={styles.image3} source={Union} />
      <Image style={styles.image} source={master} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image2: { alignSelf: "center", marginTop: 180, marginBottom: 40 },
  image3: { marginTop: 550, position: "absolute", marginLeft: 235 },
  buttonText: {
    color: "#F6F6F6",
    fontSize: 19,
  },
  buttonText2: {
    color: "black",
    fontSize: 19,
  },
  button: {
    backgroundColor: "#62CD5D",
    width: 147,
    height: 73,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    backgroundColor: "white",
    width: 147,
    height: 73,

    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  image: { marginTop: 420, position: "absolute" },
});
