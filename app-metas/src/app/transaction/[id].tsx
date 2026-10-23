import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

export default function Transaction() {
  
  const params = useLocalSearchParams<{id: string}>()


  return (
    <View style={styles.container}>
      <Text>ID:{params.id} </Text>
      <Button title='back to' onPress={() => router.back()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
