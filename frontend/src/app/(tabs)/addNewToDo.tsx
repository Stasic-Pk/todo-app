import { StyleSheet, View, Text } from "react-native";

const AddNewToDo = () => {
  return (
    <View style={styles.container}>
      <Text>new</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddNewToDo;
