import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text } from "react-native";

import { condition } from "../../utils/condition";

const Header = ({ weather, background }) => {
  return (
    <LinearGradient style={styles.header} colors={background}>
      <Text style={styles.date}>{weather.date}</Text>
      <Text style={styles.city}>{weather.city}</Text>
      {condition(weather.condition_slug, 150, true)}
      <Text style={styles.description}>{weather.description}</Text>
      <Text style={styles.degrees}>{weather.temp}°</Text>
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
  description: {
    color: "#fff",
    fontWeight: "bold",
  },
  degrees: {
    color: "#fff",
    fontSize: 80,
    fontWeight: "bold",
  },
});
