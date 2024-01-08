import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
const Vector = require("../assets/images/Vector.png");
const Left = require("../assets/images/Left.png");
const album = require("../assets/images/album.png");
const album2 = require("../assets/images/album2.png");
const album3 = require("../assets/images/album3.png");
const bil = require("../assets/images/bil.png");
const Rec = require("../assets/images/Rec.png");
const Play = require("../assets/images/Play.png");

function HomePage({ navigation }) {
  const [isPressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(!isPressed);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image2} source={Vector} />
      <View style={styles.back}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{ flexDirection: "column", marginTop: 20, marginLeft: 20 }}
          >
            <Text style={{ color: "white", fontSize: 11.5 }}>New Ablum</Text>
            <Text style={{ color: "white", fontSize: 20 }}>
              Happier Than {"\n"}Ever
            </Text>
            <Text style={{ color: "white", fontSize: 14 }}>Billie Eilish</Text>
          </View>
          <Image style={styles.image} source={bil} />
        </View>
      </View>
      <View style={styles.text}>
        <View style={{ flexDirection: "column", alignSelf: "center" }}>
          <Text style={{ fontWeight: "700", fontSize: 20 }}>News</Text>
          <Image source={Rec} style={{ marginLeft: 15 }} />
        </View>
        <Text style={styles.font}>Video</Text>
        <Text style={styles.font}>Artists</Text>
        <Text style={styles.font}>Podcast</Text>
      </View>
      <View style={styles.album}>
        <View style={{ flexDirection: "column" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Player")}>
            <Image style={styles.image3} source={album} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              paddingHorizontal: 15,
              paddingTop: 5,
            }}
          >
            Bad Guy
          </Text>
          <Text style={{ fontSize: 14, paddingHorizontal: 15 }}>
            Billie Eilish
          </Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Image style={styles.image3} source={album2} />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              paddingHorizontal: 15,
              paddingTop: 5,
            }}
          >
            Scorpion
          </Text>
          <Text style={{ fontSize: 14, paddingHorizontal: 15 }}>Drake</Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Image style={styles.image3} source={album3} />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              paddingHorizontal: 15,
              paddingTop: 5,
            }}
          >
            Where
          </Text>
          <Text style={{ fontSize: 14, paddingHorizontal: 15 }}>
            Billie Eilish
          </Text>
        </View>
      </View>

      <View style={styles.play}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Playlist</Text>
        <Text>See More</Text>
      </View>

      <View style={styles.group}>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <View style={styles.backk}>
            <Image style={{ alignSelf: "center" }} source={Play} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>As it Was</Text>
            <Text>Harry Styles</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 30 }}>
          <Text style={{ fontSize: 15, fontStyle: "italic" }}>5:33</Text>
          <TouchableOpacity onPress={handlePress}>
            <Text>{isPressed ? "❤️" : "🤍"}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.group}>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <View style={styles.backk}>
            <Image style={{ alignSelf: "center" }} source={Play} />
          </View>
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>God Did</Text>
            <Text>DJ Khaled</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 30 }}>
          <Text style={{ fontSize: 15, fontStyle: "italic" }}>3:33</Text>
          <TouchableOpacity onPress={handlePress}>
            <Text>{isPressed ? "❤️" : "🤍"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 65,
  },
  text: {
    flexDirection: "row",
    paddingTop: 30,
    gap: 48,
    paddingHorizontal: 30,
  },
  album: {
    flexDirection: "row",
    paddingTop: 30,
    paddingHorizontal: 30,
    gap: 10,
  },
  backk: {
    backgroundColor: "#D3D3D3",
    justifyContent: "center",
    alignItems: "center",
    width: 37,
    height: 37,
    borderRadius: 50,
  },
  font: { fontSize: 20 },

  play: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingBottom: 20,
    paddingTop: 40,
  },
  back: {
    backgroundColor: "#42C83C",
    width: 334,
    height: 118,
    alignSelf: "center",
    borderRadius: 30,
    marginTop: 23,
  },
  image: {
    position: "absolute",
    marginTop: -65,
  },
  image2: {
    marginTop: 0,
    alignSelf: "center",
    width: 108,
    height: 33,
  },
  group: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
});

export default HomePage;
