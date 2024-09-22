import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React, { FC } from "react";
import { Colors } from "../utils/colors";
interface Props extends TextInputProps {}
const Input: FC<Props> = (props) => {
  return (
    <TextInput
      {...props}
      style={StyleSheet.flatten([styles.input, props.style])}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    padding: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
    marginBottom: 20,
  },
});
