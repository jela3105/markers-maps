import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Map, Modal, Panel, Input } from "./components";

export default function App() {
  const [points, setPoints] = useState([]);
  const [name, setName] = useState("");

  const handleLongPress = ({ nativeEvent }) => {
    const newPoints = points.concat({ coordinate: nativeEvent.coordinate });
    setPoints(newPoints);
  };

  const handleChangeText = (text) => {};

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <Panel />
      <Modal visibility={true}>
        <Input
          title="Name"
          placeholder="Point name"
          onChangeText={handleChangeText}
        />
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
