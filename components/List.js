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

export default ({ points, closeModal, removePoint }) => {
  console.log(points);
  const removeItem = (item) => (e) => {
    removePoint(item);
  };
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={points.map((x) => x.name)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item}</Text>
              <TouchableOpacity
                style={styles.delete}
                onPress={removeItem(item)}
              >
                <Text style={styles.textDelete}>Delete</Text>
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
    flex: 3,
    margin: 10,
  },
  delete: {
    backgroundColor: "#ff0000",
    flex: 1,
    width: 70,
    borderRadius: 5,
    padding: 10,
  },
  textDelete: {
    color: "white",
  },
});
