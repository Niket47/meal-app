import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategorieGridTile from '../components/CategorieGridTile';

const CategoriesScreen = ({navigation}) => {
  const renderCategorieItems = itemData => {
    const onPressHandler = () => {
      navigation.navigate('MealsOverview', {
        catagoryId: itemData.item.id,
      });
    };

    return (
      <CategorieGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onbtnPress={onPressHandler}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategorieItems}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
