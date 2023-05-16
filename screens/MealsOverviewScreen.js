import React, {useLayoutEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({route, navigation}) => {
  const catId = route.params.catagoryId;

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const catagoryTitle = CATEGORIES.find(
      catagory => catagory.id === catId,
    ).title;

    navigation.setOptions({
      title: catagoryTitle,
    });
  }, [catId, navigation]);

  const renderMealItem = itemData => {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  };

  return (
    <View>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MealsOverviewScreen;
