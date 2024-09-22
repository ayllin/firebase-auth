import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { FC, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../../firebaseConfig";
import Input from "../components/Input";
import { RootStackParamList } from "../navigation/types";
import { Colors } from "../utils/colors";
type Props = NativeStackScreenProps<RootStackParamList, "Login">;
const LoginScreen: FC<Props> = ({ navigation }) => {
  // const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState("cihan@bas.com");
  const [sifre, setSifre] = useState("Cihan12");
  const [loading, setLoading] = useState(false);
  const uyeOl = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, sifre);
      if (response.user) {
        navigation.navigate("Profile");
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };
  const girisYap = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, sifre);
      if (response.user) {
        navigation.navigate("Profile");
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/icon.png")} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="Email Giriniz"
          autoCapitalize="none"
        />
        <Input
          value={sifre}
          onChangeText={setSifre}
          placeholder="Sifre Giriniz"
          secureTextEntry
        />
        <Pressable style={styles.btn} onPress={girisYap}>
          <Text style={styles.btnText}> Giris Yap</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={uyeOl}>
          <Text style={styles.btnText}> Uye Ol</Text>
        </Pressable>
      </View>
      {loading && <ActivityIndicator />}
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    height: 200,
    width: 200,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
  },
  inputContainer: {
    flex: 2,
    padding: 20,
  },

  btn: {
    padding: 10,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    marginBottom: 20,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
