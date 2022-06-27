import { StyleSheet } from 'react-native';
import { Home } from './src/screens/Home';
import { LinearGradient } from 'expo-linear-gradient';
import { Montserrat_400Regular, Montserrat_900Black } from '@expo-google-fonts/montserrat';
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';
import { loadAsync } from 'expo-font';
import { useCallback, useEffect, useState } from 'react';

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await preventAutoHideAsync();
        await loadAsync({
          montserrat: Montserrat_400Regular,
          montserratBold: Montserrat_900Black,
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <LinearGradient
      colors={['#348F50', '#56B4D3']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.app}
      onLayout={onLayoutRootView}>
      <Home />
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingHorizontal: 30,
  },
});
