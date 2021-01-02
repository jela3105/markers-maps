import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";

export default ({ onLongPress }) => {
  return <MapView onLongPress={onLongPress} style={styles.map} />;
};

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get("window").height - 50,
    width: Dimensions.get("window").width,
  },
});
