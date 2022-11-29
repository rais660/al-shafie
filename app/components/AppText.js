import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const AppText = ({children, style, ...otherProps}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={[styles.container, style]} {...otherProps}>
        {children}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    fontSize: 14,
    fontWeight: 'bold',
    // fontFamily: 'Poppins-Regular',
  },
});

export default AppText;
