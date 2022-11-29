import React from 'react';
import {View, StyleSheet} from 'react-native';

const AppDividers = ({
  width = '100%',
  height = 1,
  marginLeft = 10,
  marginVertical = 10,
  backgroundColor = 'grey',
  style,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          {width, height, marginLeft, marginVertical, backgroundColor},
          style,
        ]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});

export default AppDividers;
