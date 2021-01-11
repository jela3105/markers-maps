import React from "react";
import {
  FlatList,
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

export default ({ points, closeModal, removePoint, editPoint }) => {
  console.log(points);

  const removeItem = (item) => (e) => {
    removePoint(item);
  };
  const editItem = (item) => (e) => {
    editPoint(item);
  };
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={points.map((x) => x.name)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item}</Text>
              <TouchableOpacity style={styles.edit} onPress={editItem(item)}>
                <Text style={styles.textButton}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.delete}
                onPress={removeItem(item)}
              >
                <Text style={styles.textButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View>
        <Button onPress={closeModal} title="Close" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get("window").height - 300,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    height: 80,
    flexDirection: "row",
    padding: 20,
  },
  title: {
    flex: 5,
    margin: 10,
  },
  delete: {
    backgroundColor: "#ff0000",
    flex: 2,
    width: 70,
    borderRadius: 5,
    padding: 10,
    marginLeft: 5,
  },
  edit: {
    backgroundColor: "#0000ff",
    flex: 2,
    width: 70,
    borderRadius: 5,
    padding: 10,
    marginLeft: 5,
  },
  textButton: {
    color: "white",
  },
});
