import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors } from '../../../../assets/const/Colors';

type PropsType = {
  onClick: () => void;
};

export const AddButton: React.FC<PropsType> = ({ onClick }) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onClick}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  text: {
    fontSize: 30,
    color: colors.lightBlue,
  },
});
