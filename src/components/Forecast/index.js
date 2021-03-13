import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { condition } from "../../utils/condition";

const Forecast = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.calendar}>
        <Text style={styles.date}>{data.date}</Text>
        <Text style={styles.weekday}>{data.weekday}</Text>
      </View>
      {condition(data.condition, 32, false)}
      <View style={styles.temp}>
        <Text style={styles.min}>{data.min}°</Text>
        <Text style={styles.max}>{data.max}°</Text>
      </View>
    </View>
  );
};

export default Forecast;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginLeft: 12,
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    justifyContent: "space-around",
    alignItems: "center",
  },
  calendar: {
    alignItems: "center",
  },
  date: {
    fontSize: 14,
  },
  temp: {
    alignItems: "center",
  },
  min: {},
  max: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
