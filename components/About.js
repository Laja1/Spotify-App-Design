import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
const head = require("../assets/images/head.png");
const Left = require("../assets/images/Left.png");
const Rec16 = require("../assets/images/Rec16.png");
const Rec17 = require("../assets/images/Rec17.png");
import Ionicons from "@expo/vector-icons/Ionicons";
const Play = require("../assets/images/Play.png");
const Rec18 = require("../assets/images/Rec18.png");
export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image2} source={head} />
      </View>
      <View style={styles.backk}>
        <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
          <View style={styles.back}>
            <Image style={styles.image3} source={Left} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.textBack}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            paddingBottom: 5,
          }}
        >
          Billie eilish
        </Text>
        <Text style={{ textAlign: "center", fontSize: 13, paddingBottom: 5 }}>
          2 album , 67 track
        </Text>
        <Text style={{ textAlign: "center", fontSize: 12 }}>
          Lorem ipsum dolor sit amet, consectetur {"\n"}adipiscing elit. Turpis
          adipiscing vestibulum orci {"\n"}enim, nascetur vitae
        </Text>
      </View>
      <Text
        style={{
          padding: 20,
          fontSize: 20,
          fontWeight: "bold",
          paddingBottom: 5,
        }}
      >
        Album
      </Text>
      <View style={styles.album}>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Player")}>
            <Image style={styles.image3} source={Rec16} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 13,
              fontWeight: "bold",
              alignSelf: "center",
              paddingHorizontal: 15,
              paddingTop: 5,
            }}
          >
            lilbubblegum
          </Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Image style={styles.image3} source={Rec17} />
          <Text
            style={{
              fontSize: 13,
              alignSelf: "center",
              fontWeight: "bold",
              paddingHorizontal: 15,
              paddingTop: 5,
            }}
          >
            Happier Than Ever
          </Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Image style={styles.image3} source={Rec18} />
          <Text
            style={{
              fontSize: 13,
              fontWeight: "bold",
              alignSelf: "center",
              paddingHorizontal: 15,
              paddingTop: 5,
            }}
          >
            Dont S
          </Text>
        </View>
      </View>
      <View style={styles.play}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Songs</Text>
        <Text style={{ fontSize: 12 }}>See More</Text>
      </View>

      <View style={styles.group}>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <View style={styles.backkk}>
            <Image style={{ alignSelf: "center" }} source={Play} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>As it Was</Text>
            <Text>Harry Styles</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 30 }}>
          <Text style={{ fontSize: 15, fontStyle: "italic" }}>5:33</Text>
          <Ionicons name="heart-outline" size={30} />
        </View>
      </View>
      <View style={styles.group}>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <View style={styles.backkk}>
            <Image style={{ alignSelf: "center" }} source={Play} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>God Did</Text>
            <Text>DJ Khaled</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 30 }}>
          <Text style={{ fontSize: 15, fontStyle: "italic" }}>3:33</Text>
          <Ionicons name="heart-outline" size={30} />
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
  image2: {},
  textBack: {
    marginTop: 200,
    alignSelf: "center",

    justifyContent: "center",
  },
  back: {
    backgroundColor: "#00000013",
    justifyContent: "center",
    alignItems: "center",
    width: 32,

    height: 32,
    borderRadius: 50,

    borderColor: "black",
  },
  backk: {
    marginTop: -200,
    paddingHorizontal: 20,
  },
  album: {
    flexDirection: "row",
    paddingTop: 20,
    paddingHorizontal: 30,
    gap: 10,
  },
  play: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingBottom: 20,
    paddingTop: 30,
  },
  group: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  backkk: {
    backgroundColor: "#D3D3D3",
    justifyContent: "center",
    alignItems: "center",
    width: 37,
    height: 37,
    borderRadius: 50,
  },
});
