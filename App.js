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
  const [pointsFilter, setPointsFilter] = useState(true);

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter("new_point");
    setTempPoint(nativeEvent.coordinate);
    setVisibility(true);
  };

  const togglePointsFilter = () => setPointsFilter(!pointsFilter);

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
    console.log(points);
    setVisibilityFilter("all_points");
    setVisibility(true);
  };

  const removePoint = (point) => {
    console.log(`remove item ${point}`);
  };

  return (
    <View style={styles.container}>
      <Map
        onLongPress={handleLongPress}
        points={points}
        pointsFilter={pointsFilter}
      />
      <Panel
        onPressList={handleList}
        textList="List"
        togglePointsFilter={togglePointsFilter}
      />
      <Modal visibility={visibility}>
        {visibilityFilter === "new_point" ? (
          <View style={styles.form}>
            <Input
              title="Name"
              placeholder="Point name"
              onChangeText={handleChangeText}
            />
            <View style={styles.buttons}>
              <Button title="Ok" onPress={handleSubmit} />
              <Button title="Cancel" onPress={handleCancel} />
            </View>
          </View>
        ) : (
          <List
            points={points}
            closeModal={handleCancel}
            removePoint={removePoint}
          />
        )}
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  form: { padding: 15 },
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
