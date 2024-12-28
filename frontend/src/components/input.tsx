import { TextInput, StyleSheet } from "react-native";

const Input = ({ value, setValue, placeholder, multiline }: any) => {
  return (
    <TextInput
      onChangeText={(text: any) => setValue(text)}
      value={value}
      placeholder={placeholder}
      multiline={multiline}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 3,
    minHeight: 0,
    width: 150,
    padding: 12,
    borderRadius: 6,
    backgroundColor: "#e8e8e8",
  },
});

export default Input;
