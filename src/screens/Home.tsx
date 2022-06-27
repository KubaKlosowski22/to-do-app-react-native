import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { WelcomeTitle } from '../components/molecule/welcomeTitle/WelcomeTitle';
import { List } from '../components/organism/list/List';

export const Home = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.titleContainer}>
        <WelcomeTitle />
      </View>
      <View style={styles.contentContainer}>
        <List />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 4,
  },
});
