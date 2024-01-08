import { StyleSheet, Text, View, Modal, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
const pro = require("../assets/images/pro.png");
const Real = require("../assets/images/Real.png");
const Left = require("../assets/images/Left.png");
const Li = require("../assets/images/Li.png");
const Li1 = require("../assets/images/Li1.png");
const Eli = require("../assets/images/Eli.png");
const active = require("../assets/images/active.png");
const Ellipse15 = require("../assets/images/Ellipse15.png");
const Pause = require("../assets/images/Pause.png");
const Play = require("../assets/images/Play.png");
const Next = require("../assets/images/Next.png");
const Previous = require("../assets/images/Previous.png");
const Repeat = require("../assets/images/Repeate.png");
const Shuffle = require("../assets/images/Shuffle.png");

export default function Modall() {
  return (
    <View>
      <Image style={styles.image2} source={Real} />
      <Text style={styles.text3}>Bad Guy</Text>
      <View style={styles.view}>
        <Text style={styles.text2}>(Verse1)</Text>
        <View>
          <Text style={styles.text}>Sleepin', you're on your tippy toes </Text>
          <Text style={styles.text}>Creepin' around like no one knows </Text>
          <Text style={styles.text}>Think you're so criminal </Text>
          <Text style={styles.text}>Bruises on both my knees for you </Text>
          <Text style={styles.text}>Don't say thank you or please </Text>
          <Text style={styles.text}>I do what I want when I'm wanting to</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={active} />
            <Text style={{ color: "#FFFFFF", fontSize: 20, padding: 10 }}>
              My soul? So cynical
            </Text>
          </View>
        </View>
        <Text style={{ color: "#FFFFFF", fontSize: 20, padding: 10 }}>
          (Verse2)
        </Text>
        <View>
          <Text style={styles.text}>Sleepin', you're on your tippy toes </Text>
          <Text style={styles.text}>Creepin' around like no one knows </Text>
          <Text style={styles.text}>Think you're so criminal </Text>
          <Text style={styles.text}>Bruises on both my knees for you </Text>
          <Text style={styles.text}>Don't say thank you or please </Text>
          <Text style={styles.text}>I do what I want when I'm wanting to</Text>
          <Text style={{ color: "#FFFFFF", fontSize: 20, padding: 10 }}>
            My soul? So cynical
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 30,
          paddingTop: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.image3} source={pro} />
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                paddingHorizontal: 15,
              }}
            >
              Bad Guy
            </Text>
            <Text
              style={{
                fontSize: 16,
                paddingHorizontal: 15,
                color: "#404040",
              }}
            >
              Billie Eilish
            </Text>
          </View>
        </View>
        <Ionicons name="heart-outline" size={30} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
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
            padding: 10,
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "#FFFFFF30",
    fontSize: 20,
    padding: 10,
  },
  view: {
    position: "absolute",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  text2: {
    paddingTop: 20,
    color: "#FFFFFF",
    paddingHorizontal: 10,
    fontSize: 20,
  },
  text3: {
    position: "absolute",
    paddingTop: 10,
    alignSelf: "center",
    color: "#FFFFFF",

    fontSize: 26,
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
    width: 51,
    backgroundColor: "#42C83C",
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 40,
  },

  image: {
    width: 335,
    height: 370,
  },
  image2: {
    height: 600,
    width: 395,
    justifyContent: "center",
  },
});
