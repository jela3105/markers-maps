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
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item) => item}
        />
      </View>
      <View>
        <Button onPress={closeModal} title="Cancel" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get("window").height - 300,
  },
});
