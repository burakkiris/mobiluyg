import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


const EmptyScreen = ({ navigation }) => {
    // Giriş yap butonuna tıklandığında giriş yap ekranına yönlendirme yapar
    const openSignIn = () => {
      navigation.navigate('GirisYap');
    };






const EmptyScreen = () => {
    return (
        <View style={styles.container}>
          {/* Ana başlık */}
          <Text style={styles.headerText}>Köpeğinizin Duygu Durumunu Öğrenin</Text>
          
          <View style={styles.content}>
            {/* Hoş geldiniz metni */}
            <Text style={styles.contentText}>Seçim Yapın</Text>
            
            {/* Fotoğraf Çek butonu */}
            <Button title="Fotoğraf Çek" onPress={handleTakePhoto} />
            {/* Galeriden Seç butonu */}
            <Button title="Galeriden Seç" onPress={handleChooseFromGallery} />
          </View>
          
          <View style={styles.buttonContainer}>
            {/* Giriş Yap butonu */}
            <Button onPress={openSignIn} title="Giriş Yap" />
            {/* Kayıt Ol butonu */}
            <Button onPress={openSignUp} title="Kayıt Ol" />
          </View>
        </View>
      );
    };

    // Kamera izni isteme ve fotoğraf çekme işlemlerini gerçekleştirir
  const handleTakePhoto = async () => {
    // Kamera izni alınır
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      // İzin reddedilirse uyarı gösterir
      alert('Kamera erişimi reddedildi!');
      return;
    }

    // Kamera ile fotoğraf çekilir
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // Fotoğraf başarılı bir şekilde çekildiyse, uri bilgisini konsola yazdırır
      console.log('Çekilen fotoğraf:', result.uri);
      // Burada başka bir ekrana gönderebilirsiniz
    }
  };

  // Galeri izni isteme ve galeriden fotoğraf seçme işlemlerini gerçekleştirir
  const handleChooseFromGallery = async () => {
    // Galeri izni alınır
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      // İzin reddedilirse uyarı gösterir
      alert('Galeri erişimi reddedildi!');
      return;
    }

    // Galeriden fotoğraf seçilir
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // Fotoğraf başarılı bir şekilde seçildiyse, uri bilgisini konsola yazdırır
      console.log('Seçilen fotoğraf:', result.uri);
      // Burada başka bir ekrana gönderebilirsiniz
    }
  };

  // Kayıt ol butonuna tıklandığında kayıt ol ekranına yönlendirme yapar
  const openSignUp = () => {
    navigation.navigate('Kayit');
  };








const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center', // İçeriği ortala
  },
  contentText: {
    marginBottom: 20, // Alt boşluk
    fontSize: 18, // İçerik font büyüklüğü
  },
  buttonContainer: {
    flexDirection: 'row', // Butonları yatay düzende sıralar
    justifyContent: 'space-around', // Eşit aralıklarla butonları hizalar
    width: '100%', // Tam genişlikte
  },
});





export default EmptyScreen;
