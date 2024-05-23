// GirisKaydol.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GirisKaydol = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Giriş Yap / Kaydol</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Giriş Yap" onPress={() => {}} />
        <Button title="Kaydol" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default GirisKaydol;
