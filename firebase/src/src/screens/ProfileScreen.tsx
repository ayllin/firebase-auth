import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
const ProfileScreen = () => {
  const cikisYap = () => {
    signOut(auth);
  };
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Button title="Cikis Yap" onPress={cikisYap} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
