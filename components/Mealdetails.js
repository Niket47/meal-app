import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Mealdetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItems, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailsItems, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsItems, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default Mealdetails;

const styles = StyleSheet.create({
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
