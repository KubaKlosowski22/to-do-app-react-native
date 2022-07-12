import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type PropsType = {
  onClose: () => void;
};

export const ModalHeader: React.FC<PropsType> = ({ onClose }) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.button} onPress={onClose}>
        <Text style={styles.buttonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 100,
    backgroundColor: '#56B4D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
});
