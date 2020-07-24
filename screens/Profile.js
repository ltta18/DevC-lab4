import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';


export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});