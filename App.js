import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Dimensions, Modal, Text } from "react-native";
import MapView from "react-native-maps";

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <Modal transparent={true} animationType="slide" visible={true}>
        <View style={styles.center}>
          <View style={styles.modalView}>
            <Text>Text</Text>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
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
