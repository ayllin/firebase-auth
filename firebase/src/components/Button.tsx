import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Colors } from "../utils/colors";
interface Props {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
}
const Button: FC<Props> = ({
  title,
  onPress,
  backgroundColor = Colors.primary,
}) => {
  return (
    <Pressable
      style={StyleSheet.flatten([styles.btn, { backgroundColor }])}
      onPress={onPress}
    >
      <Text style={styles.btnText}> {title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
