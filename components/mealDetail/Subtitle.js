import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitilecontainer}>
      <Text style={styles.subtitile}>{children}</Text>
    </View>
  );
};

export default Subtitle;
const styles = StyleSheet.create({
  subtitile: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitilecontainer: {
    marginHorizontal: 24,
    marginVertical: 20,
    padding: 6,
    margin: 4,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
  },
});
