import React, {useLayoutEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Button} from 'react-native';
import {MEALS} from '../data/dummy-data';
import Mealdetails from '../components/Mealdetails';
import Subtitle from '../components/mealDetail/Subtitle';
import List from '../components/mealDetail/List';
import Headerbtn from '../components/Headerbtn';

const MealDetailScreen = ({route, navigation}) => {
  const mealId = route.params.mealId;

  const selectedmeal = MEALS.find(meal => meal.id === mealId);

  const headerbtnPressHandler = () => {
    console.log('pressed');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Headerbtn onIconPress={headerbtnPressHandler} />;
      },
    });
  }, [navigation, headerbtnPressHandler]);
  return (
    <ScrollView style={styles.rootcontainer}>
      <View>
        <Image style={styles.image} source={{uri: selectedmeal.imageUrl}} />
        <Text style={styles.title}>{selectedmeal.title}</Text>
        <Mealdetails
          duration={selectedmeal.duration}
          complexity={selectedmeal.complexity}
          affordability={selectedmeal.affordability}
          textStyle={styles.detailtext}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>ingredients</Subtitle>
            <List data={selectedmeal.ingredients} />

            <Subtitle>steps</Subtitle>
            <List data={selectedmeal.steps} />
          </View>
        </View>

        {/* <View style={styles.subtitilecontainer}>
        <Text style={styles.subtitile}>ingredients</Text>
      </View> */}

        {/* {selectedmeal.ingredients.map(ingredients => (
        <Text key={ingredients}>{ingredients}</Text>
      ))} */}

        {/* <View style={styles.subtitilecontainer}>
        <Text style={styles.subtitile}>steps</Text>
      </View> */}

        {/* {selectedmeal.steps.map(step => (
        <Text key={step}>{step}</Text>
      ))} */}
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootcontainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 320,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailtext: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    Width: '80',
  },
});
