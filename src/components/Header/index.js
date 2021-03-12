import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text } from "react-native";

const Header = () => {
  return (
    <LinearGradient style={styles.header} colors={["#1ed6ff", "#97c1ff"]}>
      <Text style={styles.date}>20/02/2021</Text>
      <Text style={styles.city}>Belém, PA</Text>
      <Ionicons name="cloud" size={150} color="#FFF" />
      <Text style={styles.degrees}>30°</Text>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "95%",
    height: "55%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  date: {
    color: "#fff",
    fontSize: 17,
  },
  city: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  degrees: {
    color: "#fff",
    fontSize: 80,
    fontWeight: "bold",
  },
});
