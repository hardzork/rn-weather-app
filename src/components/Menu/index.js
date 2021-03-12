import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.openDrawer()}
    >
      <Feather name="menu" size={36} color="#373737" />
    </TouchableOpacity>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 9,
    width: 70,
    height: 70,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    left: 15,
    top: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
});
