import React from "react";
import { SafeAreaView, Text, StyleSheet, FlatList } from "react-native";

import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Conditions from "../../components/Conditions";
import Forecast from "../../components/Forecast";

const condicoes = [
  {
    date: "11/03",
    weekday: "Qui",
    max: 25,
    min: 16,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "12/03",
    weekday: "Sex",
    max: 26,
    min: 17,
    description: "Tempestades",
    condition: "rain",
  },
  {
    date: "13/03",
    weekday: "Sáb",
    max: 26,
    min: 18,
    description: "Tempestades isoladas",
    condition: "clear_day",
  },
  {
    date: "14/03",
    weekday: "Dom",
    max: 27,
    min: 18,
    description: "Tempestades",
    condition: "snow",
  },
  {
    date: "15/03",
    weekday: "Seg",
    max: 25,
    min: 18,
    description: "Tempestades",
    condition: "clear_night",
  },
  {
    date: "16/03",
    weekday: "Ter",
    max: 26,
    min: 17,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "17/03",
    weekday: "Qua",
    max: 25,
    min: 18,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "18/03",
    weekday: "Qui",
    max: 25,
    min: 19,
    description: "Tempestades",
    condition: "storm",
  },
  {
    date: "19/03",
    weekday: "Sex",
    max: 22,
    min: 18,
    description: "Alguns chuviscos",
    condition: "rain",
  },
  {
    date: "20/03",
    weekday: "Sáb",
    max: 21,
    min: 17,
    description: "Tempo nublado",
    condition: "cloud",
  },
];

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header />
      <Conditions />
      <FlatList
        horizontal={true}
        contentContainerStyle={{ paddingBottom: "5%" }}
        style={styles.list}
        data={condicoes}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <Forecast data={item} />}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8f0ff",
    paddingTop: "5%",
  },
  list: {
    marginTop: 10,
    marginLeft: 10,
  },
});
