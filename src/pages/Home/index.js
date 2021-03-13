import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Text, StyleSheet, FlatList } from "react-native";
import * as Location from "expo-location";

import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Conditions from "../../components/Conditions";
import Forecast from "../../components/Forecast";

import api, { key } from "../../services/api";

const Home = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({});
  const [background, setBackground] = useState(["#1ed6ff", "#97c1ff"]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permissão negada para acessar localização");
        setLoading(false);
        return;
      }
      const { coords } = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = coords;
      const response = await api.get(
        `weather?fields=only_results&key=${key}&lat=${latitude}&lon=${longitude}`
      );
      if (
        response.data.currently === "noite" ||
        response.data.currently === "night"
      ) {
        setBackground(["#0c3741", "#0f2f61"]);
      }
      setWeather(response.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 17, fontStyle: "italic" }}>
          Carregando dados...
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header weather={weather} background={background} />
      <Conditions weather={weather} />
      <FlatList
        horizontal={true}
        contentContainerStyle={{ paddingBottom: "5%" }}
        style={styles.list}
        data={weather.forecast}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <Forecast data={item} />}
        showsHorizontalScrollIndicator={false}
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
