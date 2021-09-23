import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export default function MyIcon(url, focused) {
  return (
    <View>
      <Image
        source={require('')}
        resizeMode="contain"
        style={[styles.Icon, {tintColor: focused ? '#FF4E4E' : '#AC4A4A'}]}
      />
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Icon: {
    height: 25,
    width: 25,
    top: 5,
  },
});
