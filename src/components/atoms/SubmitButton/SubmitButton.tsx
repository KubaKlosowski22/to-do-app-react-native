import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { colors } from '../../../../assets/const/Colors';

type PropsType = {
  onPress: () => void;
};

export const SubmitButton: React.FC<PropsType> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Text style={styles.text}>Submit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  text: {
    fontFamily: 'montserrat',
    color: 'white',
    fontSize: 16,
  },
});
