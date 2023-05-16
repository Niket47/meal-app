import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';

const Headerbtn = ({onIconPress}) => {
  return (
    <Pressable
      onPress={onIconPress}
      style={({pressed}) => pressed && styles.pressed}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/icon/star.png')}
      />
    </Pressable>
  );
};

export default Headerbtn;
const styles = StyleSheet.create({
  tinyLogo: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.7,
  },
});
