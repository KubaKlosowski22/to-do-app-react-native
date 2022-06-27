import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ListItem } from '../../molecule/ListItem';

type PropsType = {};

export const List: React.FC<PropsType> = () => {
  const items = [
    'Wynieść śmieci',
    'Zrobić zakupy',
    'Posmyrać po brzuszku Amigo',
    'Posmyrać po brzuszku Pysiulka',
    'Pograć sobie na nowym xboxie',
    'Odpocząć',
  ];
  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      {items.map((item, index) => (
        <ListItem task={item} key={index} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
  item: {
    margin: 10,
  },
});
