import React from 'react';
import { StyleSheet} from 'react-native';
import ScreenNavigation from './navigation/Navigation'

export default function App() {
  return (
    <ScreenNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
