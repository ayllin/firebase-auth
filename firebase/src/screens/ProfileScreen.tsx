import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import Button from "../components/Button";
import { getAuth, signOut, updateProfile, deleteUser } from "firebase/auth";
import Input from "../components/Input";
const ProfileScreen = () => {
  const cikisYap = () => {
    signOut(auth);
  };
  const auth = getAuth();

  const [displayName, setDisplayName] = useState(
    auth.currentUser?.displayName || ""
  );
  const [photoUrl, setPhotoUrl] = useState(auth.currentUser?.photoURL || "");
  const guncelle = async () => {
    if (auth.currentUser) {
      try {
        const response = await updateProfile(auth.currentUser, {
          displayName: displayName,
          photoURL: photoUrl,
        });
        console.log("response", response);
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  const changeDisplayName = (value: string) => {
    setDisplayName(value);
  };
  const changePhotoUrl = (value: string) => {
    setPhotoUrl(value);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {photoUrl && <Image source={{ uri: photoUrl }} style={styles.image} />}
        <Input editable={false} value={auth.currentUser?.email || ""}></Input>
        <Input
          onChangeText={(text) => changeDisplayName(text)}
          value={displayName}
          autoCapitalize="words"
        ></Input>
        <Input
          onChangeText={(text) => changePhotoUrl(text)}
          value={photoUrl}
        ></Input>
      </ScrollView>
      <Button title="Bilgileri Guncelle" onPress={guncelle} />
      <Button title="Cikis Yap" onPress={cikisYap} backgroundColor="red" />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollView: {
    flexGrow: 1,
  },
  image: {
    height: 100,
    borderRadius: 50,
    width: 100,
    borderWidth: 5,
    marginBottom: 10,
  },
});
