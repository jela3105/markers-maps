import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView from "react-native-maps";

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
