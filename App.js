import React from 'react';
import { StyleSheet, View } from 'react-native';

import Photos from './screens/PhotosScreen';
import Header from './components/HeaderComponent';

// api a consumir
const apiPhoto = "http://jsonplaceholder.typicode.com/photos"

export default function App() {
  return (
      <View style={styles.container}>  
        <Header />
        <Photos apiPhoto={apiPhoto} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 23  
  },
});
