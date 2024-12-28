import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = ({ text, onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={{ textAlign: "center", fontSize: 15.5 }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 5,
    padding: 12,
    width: 110,
    borderRadius: 6,
    backgroundColor: "#cfcfcf",
  },
});

export default Button;
