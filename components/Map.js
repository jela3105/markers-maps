import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";

export default ({ onLongPress, points, pointsFilter }) => {
  return (
    <MapView onLongPress={onLongPress} style={styles.map}>
      {pointsFilter &&
        points.map((x) => (
          <Marker coordinate={x.coordinate} title={x.name} key={x.name} />
        ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get("window").height - 50,
    width: Dimensions.get("window").width,
  },
});
