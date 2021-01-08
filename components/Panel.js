import React from "react";
import { StyleSheet, Button, View } from "react-native";

export default ({ onPressList, textList, togglePointsFilter }) => {
  return (
    <View style={styles.panel}>
      <Button onPress={onPressList} title={textList} />
      <Button title="Show/Hide" onPress={togglePointsFilter} />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
