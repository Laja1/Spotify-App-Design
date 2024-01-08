import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
const head = require("../assets/images/head.png");
const Left = require("../assets/images/Left.png");
const Rec16 = require("../assets/images/Rec16.png");
const Rec17 = require("../assets/images/Rec17.png");
import Ionicons from "@expo/vector-icons/Ionicons";
const rec4 = require("../assets/images/rec4.png");
const rec1 = require("../assets/images/rec1.png");
const rec2 = require("../assets/images/rec2.png");
const rec3 = require("../assets/images/rec3.png");
const rec5 = require("../assets/images/rec5.png");
const rec6 = require("../assets/images/rec6.png");
const Rec29 = require("../assets/images/Rec29.png");

export default function User({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 105,
            paddingTop: 40,
            paddingHorizontal: 30,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
            <View style={styles.bac}>
              <Image style={styles.image3} source={Left} />
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Profile</Text>
        </View>
        <View style={{ padding: 10, alignSelf: "center" }}>
          <Image source={Rec29} />
        </View>
        <View
          style={{ padding: 10, alignSelf: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 12 }}>soroushnorozyui@gmail.com</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Soroushnrz</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View
            style={{ padding: 10, alignSelf: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>778</Text>
            <Text style={{ fontSize: 14 }}>Followers</Text>
          </View>
          <View
            style={{ padding: 10, alignSelf: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>243</Text>
            <Text style={{ fontSize: 14 }}>Followers</Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          padding: 30,
          fontSize: 15,
          fontWeight: "bold",
          paddingBottom: 10,
        }}
      >
        PUBLIC PLAYLIST
      </Text>

      <View style={styles.group}>
        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
          <View style={styles.backkk}>
            <Image style={{ alignSelf: "center" }} source={rec1} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Dont Smile At Me
            </Text>
            <Text style={{ fontSize: 12 }}>Billie Eilish</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 30, alignItems: "center" }}>
          <Text style={{ fontSize: 15, fontStyle: "italic" }}>5:33</Text>
          <Ionicons name="ellipsis-horizontal-outline" size={30} />
        </View>
      </View>
      <View style={styles.group}>
        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
          <View style={styles.backkk}>
            <Image style={{ alignSelf: "center" }} source={rec2} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>As It Was</Text>
            <Text style={{ fontSize: 12 }}>Harry Styles</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 30, alignItems: "center" }}>
          <Text style={{ fontSize: 15, fontStyle: "italic" }}>5:33</Text>
          <Ionicons name="ellipsis-horizontal-outline" size={30} />
        </View>
      </View>
      <View style={styles.group}>
        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
          <View style={styles.backkk}>
            <Image style={{ alignSelf: "center" }} source={rec3} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Super Freaky Girl
            </Text>
            <Text style={{ fontSize: 12 }}>Nicki Minaj</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 30, alignItems: "center" }}>
          <Text style={{ fontSize: 15, fontStyle: "italic" }}>5:33</Text>
          <Ionicons name="ellipsis-horizontal-outline" size={30} />
        </View>
      </View>
      <View style={styles.group}>
        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
          <View style={styles.backkk}>
            <Image style={{ alignSelf: "center" }} source={rec4} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Bad Habit</Text>
            <Text style={{ fontSize: 12 }}>Steve Lacy</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 30, alignItems: "center" }}>
          <Text style={{ fontSize: 15, fontStyle: "italic" }}>5:33</Text>
          <Ionicons name="ellipsis-horizontal-outline" size={30} />
        </View>
      </View>
      <View style={styles.group}>
        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
          <View style={styles.backkk}>
            <Image style={{ alignSelf: "center" }} source={rec5} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Bad</Text>
            <Text style={{ fontSize: 12 }}>Doja Cat</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 30, alignItems: "center" }}>
          <Text style={{ fontSize: 15, fontStyle: "italic" }}>5:33</Text>
          <Ionicons name="ellipsis-horizontal-outline" size={30} />
        </View>
      </View>
      <View style={styles.group}>
        <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
          <View style={styles.backkk}>
            <Image style={{ alignSelf: "center" }} source={rec6} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Sweetest Pie
            </Text>
            <Text style={{ fontSize: 12 }}>Megan Thee Stallion</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 30, alignItems: "center" }}>
          <Text style={{ fontSize: 15, fontStyle: "italic" }}>5:33</Text>
          <Ionicons name="ellipsis-horizontal-outline" size={30} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#FAFAFA",
  },
  image2: {},
  textBack: {
    marginTop: 200,
    alignSelf: "center",

    justifyContent: "center",
  },
  back: {
    backgroundColor: "#ffffff",
    justifyContent: "center",

    width: 390,
    height: 318,
    borderRadius: 50,
    shadowOffset: 0.1,
    shadowOpacity: 0.2,
  },

  bac: {
    backgroundColor: "#D3D3D3",
    justifyContent: "center",
    alignItems: "center",
    width: 32,
    height: 32,
    borderRadius: 50,
    borderColor: "black",
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
    padding: 5,
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
});
