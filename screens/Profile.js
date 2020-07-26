import React from 'react';

import { ProfileStyles as styles } from '../styles/styles';
import { 
  SafeAreaView, 
  View, 
  Text 
} from 'react-native';


export default function Profile() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
}