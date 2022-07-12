import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import dayjs from 'dayjs';

type PropsType = {};

export const WelcomeTitle: React.FC<PropsType> = () => {
  const date = new Date();

  return (
    <View>
      <Text style={styles.firstLine}>Hello, Guest 👋</Text>
      <Text style={styles.secondLine}>{dayjs(date).format('dddd, MMMM D, YYYY')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  firstLine: {
    fontFamily: 'montserratBold',
    color: '#ffffff',
    fontSize: 30,
  },
  secondLine: {
    fontFamily: 'montserrat',
    color: '#ffffff',
  },
});
