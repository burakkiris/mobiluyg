import React from 'react';
import { View, Text, Button, StyleSheet, Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Expo Image Picker'ı içe aktarıyoruz

const HomeScreen = () => {
  const openSignIn = () => {
    alert('Giriş Yap ekranı açılacak');
  };

  const openSignUp = () => {
    alert('Kaydol ekranı açılacak');
  };

  const handleUpload = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'İzin reddedildi!',
          'Galeriye erişim izni verilmedi. Lütfen ayarlardan izin verin.'
        );
        return;
      }
    }

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        console.log('Selected image:', result.uri);
      }
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Köpeğinizin Duygu Durumunu Öğrenin</Text>
      
      <View style={styles.content}>
        <Text style={styles.contentText}>Hoş Geldiniz!</Text>
        
        {/* Fotoğraf Yükle Butonu */}
        <Button title="Fotoğraf Yükle" onPress={handleUpload} />
      </View>
      
      <View style={styles.menuButton}>
        <Button onPress={openSignIn} title="Giriş Yap" />
        <Button onPress={openSignUp} title="Kaydol" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Arkaplan rengi
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    alignItems: 'center',
  },
  contentText: {
    marginBottom: 20,
    fontSize: 18,
  },
  menuButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 20,
  },
});

export default HomeScreen;
