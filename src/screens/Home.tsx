import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { WelcomeTitle } from '../components/molecule/WelcomeTitle/WelcomeTitle';
import { List } from '../components/organism/List/List';
import { CreateTaskModal } from '../components/organism/CreateTaskModel/CreateTaskModal';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const Home = () => {
  const { taskList } = useSelector((state: RootState) => state);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.titleContainer}>
        <WelcomeTitle />
      </View>
      <View style={styles.contentContainer}>
        <List />
        <View style={styles.buttonContainer}>
          <CreateTaskModal />
        </View>
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
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
});
