import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

export default function Inprogress() {
  const params = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Text>{params.id}</Text>
      <Button title="voltando" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonBack: {
    backgroundColor: "#6200ff",
    padding: 25,
    borderRadius: 35,
  },
});
