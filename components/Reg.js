import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
const Vector = require("../assets/images/Vector.png");
const Left = require("../assets/images/Left.png");
const google = require("../assets/images/google.png");
const apple = require("../assets/images/apple.png");
const Ellipse15 = require("../assets/images/Ellipse15.png");

function Reg({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 85,
          paddingHorizontal: 30,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <View style={styles.back}>
            <Image style={styles.image3} source={Left} />
          </View>
        </TouchableOpacity>
        <Image style={styles.image2} source={Vector} />
      </View>
      <View style={{ alignItems: "center", paddingTop: 60 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Register</Text>
        <Text style={{ fontSize: 12, paddingTop: 10 }}>
          If you need any support
          <Text style={{ color: "#38B432", fontSize: 12 }}> Click Here</Text>
        </Text>
        <View style={{ padding: 20 }}>
          <View style={{ padding: 8 }}>
            <View style={styles.form}>
              <TextInput placeholder="Full Name" style={styles.input} />
            </View>
          </View>
          <View style={{ padding: 8 }}>
            <View style={styles.form}>
              <TextInput placeholder="Enter Email" style={styles.input} />
            </View>
          </View>
          <View style={{ padding: 8 }}>
            <View style={styles.form}>
              <TextInput placeholder="Enter Password" style={styles.input} />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Landing")}>
        <View style={styles.button}>
          <Text style={styles.buttonText}> Create Account</Text>
        </View>
      </TouchableOpacity>
      <Text style={{ alignSelf: "center", color: "#B0B0B0", padding: 20 }}>
        ___________________ Or ___________________
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          alignItems: "baseline",
          gap: 50,
        }}
      >
        <Image source={google} />
        <Image source={apple} />
      </View>
      <View
        style={{
          alignSelf: "center",

          flexDirection: "row",
          padding: 30,
        }}
      >
        <Text>Do you have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={{ color: "#288CE9" }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 65,
  },
  form: {
    backgroundColor: "#ffffff",

    borderColor: "#D9D9D9",
    borderWidth: 2,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    color: "black",

    paddingHorizontal: 30,
    width: 334,
    fontSize: 16,
    borderColor: "black",
    height: 80,
  },

  back: {
    backgroundColor: "#D3D3D3",
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
    borderRadius: 50,
    borderColor: "black",
  },
  image2: {
    width: 108,
    height: 33,
  },
  button: {
    backgroundColor: "#62CD5D",
    width: 332,
    height: 80,
    borderRadius: 30,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "#F6F6F6",
    alignSelf: "center",
    fontSize: 20,
  },
});

export default Reg;
