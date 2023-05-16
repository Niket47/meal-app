import React from 'react';
import {View, Text, Pressable, StyleSheet, Platform} from 'react-native';

const CategorieGridTile = ({title, color, onbtnPress}) => {
  return (
    <View style={[styles.gridItems, {backgroundColor: color}]}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonpressed : null,
        ]}
        onPress={onbtnPress}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItems: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: '#fff',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonpressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
});

export default CategorieGridTile;
