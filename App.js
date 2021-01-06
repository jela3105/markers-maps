import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Map, Modal, Panel, Input, List } from "./components";

export default function App() {
  const [points, setPoints] = useState([]);
  const [name, setName] = useState("");
  const [tempPoint, setTempPoint] = useState({});
  const [visibilityFilter, setVisibilityFilter] = useState("new_point"); // new_point, all_points
  const [visibility, setVisibility] = useState(false);

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter("new_point");
    setTempPoint(nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleSubmit = () => {
    const newPoint = { coordinate: tempPoint, name: name };
    setPoints(points.concat(newPoint));
    setVisibility(false);
    setName("");
  };
  const handleCancel = () => {
    setVisibility(false);
    setName("");
  };
  const handleChangeText = (text) => {
    setName(text);
  };

  const handleList = () => {
    console.log("f");
    console.log(points);
    setVisibilityFilter("all_points");
    setVisibility(true);
  };

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} />
      <Panel onPressList={handleList} textList="List" />
      <Modal visibility={visibility}>
        {visibilityFilter === "new_point" ? (
          <>
            <Input
              title="Name"
              placeholder="Point name"
              onChangeText={handleChangeText}
            />
            <View style={styles.buttons}>
              <Button title="Ok" onPress={handleSubmit} />
              <Button title="Cancel" onPress={handleCancel} />
            </View>
          </>
        ) : (
          <List points={points} />
        )}
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
