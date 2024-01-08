import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
const frame24 = require("../assets/images/frame24.jpg");
const Vector = require("../assets/images/Vector.png");
// import styles from "./styles.css";
import { SvgUri } from "react-native-svg";
import VectorSVG from "./VectorSVG.svg";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={frame24} />
      <Image source={Vector} />
      <Text
        style={{
          color: "white",
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 428,
        }}
      >
        Enjoy listening to music
      </Text>
      <Text
        style={{
          color: "#797979",
          fontSize: 17,
          textAlign: "center",
          padding: 20,
        }}
      >
        Lorem ipsum dolor sit amet, {"\n"}consectetur adipiscing elit. Sagittis
        enim {"\n"}purus sed phasellus. Cursus ornare id {"\n"}scelerisque
        aliquam.
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Mode")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}> Get Started</Text>
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
    justifyContent: "center",
  },
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
  image: { width: 396, position: "absolute", height: 855 },
});
