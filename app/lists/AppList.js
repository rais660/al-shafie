/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppDividers from '../components/AppDividers';
import AppText from '../components/AppText';

const AppList = ({
  title,
  icon = 'check',
  color = 'grey',
  style,
  selected,
  onPress,
  ...otherProps
}) => {
  const [clickId, setClickId] = useState(selected);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.buttonContainer, style]}
        onPress={onPress}
        {...otherProps}>
        <AppText style={{fontWeight: 'bold', fontSize: 16, marginRight: 20}}>
          {title}
        </AppText>
        <FontAwesome name={icon} size={30} color={color} />
      </TouchableOpacity>
      <AppDividers width={300} height={1} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',

    marginVertical: 15,
    paddingHorizontal: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AppList;
