import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

const AppCard = ({
  children,
  width = '100%',
  height = 200,
  backgroundColor = 'white',
  borderRadius = 15,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.99}
      style={styles.container}
      onPress={onPress}>
      <View
        style={[
          styles.innerContainer,
          {backgroundColor, width, height, borderRadius},
          style,
        ]}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical:10,
    // flexDirection:'row',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 10,

    elevation: 5,
  },
});

export default AppCard;
