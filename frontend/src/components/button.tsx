import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = ({ text, onPress }: any) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    margin: 10,
    borderRadius: 6,
    backgroundColor: "#cfcfcf",
  },
});

export default Button;
