import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Gorsel = ({ route }) => {
  const { photoUri } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: photoUri }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

export default Gorsel;
