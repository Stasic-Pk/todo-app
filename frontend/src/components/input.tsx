import { TextInput, View, StyleSheet } from "react-native";

const Input = ({ value, setValue, placeholder, multiline, maxLength }: any) => {
  return (
    <View style={styles.input}>
      <TextInput
        onChangeText={(text: any) => setValue(text)}
        value={value}
        placeholder={placeholder}
        multiline={multiline}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 2.5,
    minHeight: 0,
    width: 150,
    paddingLeft: 5,
    padding: 2,
    borderRadius: 6,
    backgroundColor: "#e8e8e8",
  },
});

export default Input;
