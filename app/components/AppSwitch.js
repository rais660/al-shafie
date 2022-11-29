import React from 'react';
import {View, StyleSheet} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

const AppSwitch = ({
  isOn = false,
  onColor = 'green',
  offColor = 'grey',
  label,
  labelStyle,
  style,
  size,
  onToggle,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, style]}>
      <ToggleSwitch
        isOn={isOn}
        onColor={onColor}
        offColor={offColor}
        label={label}
        labelStyle={labelStyle}
        size={size}
        onToggle={onToggle}
        {...otherProps}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppSwitch;
