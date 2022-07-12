import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Task } from '../../molecule/Task/Task';

type PropsType = {};

export const List: React.FC<PropsType> = () => {
  const items = [
    'Wynieść śmieci',
    'Zrobić zakupy',
    // 'Posmyrać po brzuszku Amigo',
    // 'Posmyrać po brzuszku Pysiulka',
    'Pograć sobie na nowym xboxie',
    'Odpocząć',
    'Odpocząć',
    'Odpocząć',
    'Odpocząć',
  ];
  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      {items.map((item, index) => (
        <Task task={item} key={index} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    paddingHorizontal: 5,
  },
  item: {
    margin: 10,
  },
});
