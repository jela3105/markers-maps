import React from "react";
import {
  FlatList,
  Text,
  View,
  Button,
  StyleSheet,
  Dimensions,
} from "react-native";

export default ({ points, closeModal }) => {
  console.log(points);
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={points.map((x) => x.name)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.button}>
        <Button onPress={closeModal} title="Cancel" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: { paddingBottom: 15 },
  list: {
    height: Dimensions.get("window").height - 300,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    height: 50,
    justifyContent: "center",
    padding: 20,
  },
});
