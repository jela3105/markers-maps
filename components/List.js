import React from "react";
import { FlatList, Text, View } from "react-native";

export default ({ points }) => {
  console.log(points);
  return (
    <>
      <View>
        <FlatList
          data={points.map((x) => x.name)}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item) => item}
        />
      </View>
    </>
  );
};
