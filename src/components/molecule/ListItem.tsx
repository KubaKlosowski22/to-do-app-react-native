import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { ListCheckButton } from '../atoms/ListCheckButton/ListCheckButton';

type PropsType = {
  task: string;
};

export const ListItem: React.FC<PropsType> = ({ task }) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.root}>
      <View>
        <ListCheckButton onClick={() => setChecked(!checked)} />
      </View>
      <View>
        <Animated.Text style={[styles.text, checked && { textDecorationLine: 'line-through' }]}>
          {task}
        </Animated.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  text: {
    fontFamily: 'montserrat',
    fontSize: 14,
  },
});
