import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Modall from "./Modall";
import Ionicons from "@expo/vector-icons/Ionicons";
const Big = require("../assets/images/Big.png");
const Vector = require("../assets/images/Vector.png");
const pro = require("../assets/images/pro.png");
const Left3 = require("../assets/images/Left3.png");
const Left = require("../assets/images/Left.png");
const Li = require("../assets/images/Li.png");
const Li1 = require("../assets/images/Li1.png");
const Eli = require("../assets/images/Eli.png");
const Ellipse15 = require("../assets/images/Ellipse15.png");
const Pause = require("../assets/images/Pause.png");
const Play = require("../assets/images/Play.png");
const Next = require("../assets/images/Next.png");
const Previous = require("../assets/images/Previous.png");
const Repeat = require("../assets/images/Repeate.png");
const Shuffle = require("../assets/images/Shuffle.png");

export default function Player({ navigation }) {
  const [isModal, setIsModal] = useState(false);

  handleClicked = (e) => {
    setIsModal(true);
  };
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 85,
          paddingHorizontal: 30,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
          <View style={styles.back}>
            <Image style={styles.image3} source={Left} />
          </View>
        </TouchableOpacity>
        <Text>Now Playing</Text>
      </View>
      <View style={styles.container2}>
        <Image style={styles.image} source={Big} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 30,
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingHorizontal: 15,
            }}
          >
            Bad Guy
          </Text>
          <Text
            style={{
              fontSize: 20,
              paddingHorizontal: 15,
              color: "#404040",
              paddingBottom: 20,
            }}
          >
            Billie Eilish
          </Text>
        </View>
        <Ionicons name="heart-outline" size={30} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 20,
          paddingHorizontal: 30,
        }}
      >
        <Image style={styles.li} source={Li1} />
        <Image style={styles.image3} source={Li} />
        <Image style={styles.image3} source={Eli} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 30,
        }}
      >
        <Text style={{ fontSize: 16 }}>2:55</Text>
        <Text style={{ fontSize: 16 }}>4:02</Text>
      </View>
      <View style={{ alignSelf: "center" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 30,
            padding: 40,
          }}
        >
          <Image style={styles.image3} source={Repeat} />
          <Image style={styles.image3} source={Previous} />
          <View style={styles.green}>
            <Image
              style={{
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
              }}
              source={Pause}
            />
          </View>
          <Image style={styles.image3} source={Next} />
          <Image style={styles.image3} source={Shuffle} />
        </View>
      </View>
      <View style={{ alignSelf: "center", paddingTop: 10 }}>
        <TouchableOpacity onPress={() => handleClicked()}>
          <Image style={styles.image3} source={Left3} />
        </TouchableOpacity>
        <Text>Lyrics</Text>
      </View>
      <Modal
        visible={isModal}
        onRequestClose={() => setIsModal(false)}
        animationType="fade"
        presentationStyle="pageSheet"
      >
        <Modall />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  li: {
    position: "absolute",
    marginLeft: 28,
  },
  container2: {
    alignSelf: "center",
    paddingTop: 20,
  },
  green: {
    width: 72,
    backgroundColor: "#42C83C",
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 50,
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
  image: {
    width: 335,
    height: 370,
  },
  image2: {
    alignSelf: "center",

    height: 600,
    justifyContent: "center",
  },
});
