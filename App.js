import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Map, Modal, Panel, Input } from "./components";

export default function App() {
  const [points, setPoints] = useState([]);
  const [name, setName] = useState("");
  const [tempPoint, setTempPoint] = useState({});
  const [visibility, setVisibility] = useState(false);

  const handleLongPress = ({ nativeEvent }) => {
    setTempPoint(nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleSubmit = () => {
    const newPoint = { coordinate: tempPoint, name: name };
    setPoints(points.concat(newPoint));
    setVisibility(false);
    setName("");
  };
  const handleChangeText = (text) => {
    setName(text);
  };

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <Panel />
      <Modal visibility={visibility}>
        <Input
          title="Name"
          placeholder="Point name"
          onChangeText={handleChangeText}
        />
        <Button title="Ok" onPress={handleSubmit} />
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
