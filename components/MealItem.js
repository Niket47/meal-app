import React from 'react';
import {Pressable, Text, View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Mealdetails from './Mealdetails';

const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  const selectMealItemhandler = () => {
    navigation.navigate('MealDetail', {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [pressed ? styles.buttonpressed : null]}
        onPress={selectMealItemhandler}>
        <View>
          <Image style={styles.image} source={{uri: imageUrl}} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Mealdetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
        {/* <View style={styles.details}>
          <Text style={styles.detailsItems}>{duration}m</Text>
          <Text style={styles.detailsItems}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailsItems}>{affordability.toUpperCase()}</Text>
        </View> */}
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 8,
  },
  buttonpressed: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    margin: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailsItems: {
    marginHorizontal: 4,
    fontSize: 15,
    color: 'black',
  },
});
