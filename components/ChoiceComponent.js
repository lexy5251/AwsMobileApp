import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function ChoiceComponent({ onClick, text, checked, checkedColor, disabled }) {
  return (
    <View>
      <CheckBox
        title={text}
        onPress={() => onClick(text)}
        checked={checked}
        disabled={disabled}
        size={18}
        uncheckedColor='#4DC1E9'
        uncheckedIcon='circle-o'
        checkedIcon='dot-circle-o'
        checkedColor={checkedColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  explanationStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    lineHeight: 20,
  },
  
});
