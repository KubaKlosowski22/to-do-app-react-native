import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { colors } from '../../../../../assets/const/Colors';

export const Input: React.FC<TextInputProps> = ({ placeholder, value, onBlur, onChangeText }) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onBlur={onBlur}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
