import React from "react";
import { StyleSheet, Button, View } from "react-native";

export default ({ onPressList, textList }) => {
  return (
    <View style={styles.panel}>
      <Button onPress={onPressList} title={textList} />
      <Button title="Show/Hide" />
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
