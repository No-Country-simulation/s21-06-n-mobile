import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const ActivityIdicator = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size={100} color="#00ff00" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default ActivityIdicator;