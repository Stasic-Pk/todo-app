import { StyleSheet, View, Text } from "react-native";
import Button from "../../components/button";
import getUsers from "../../database/getUsers";
import getCurrentUser from "../../database/getCurrentUser";

const List = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button text={"getUsers"} onPress={() => getUsers()} />
      <Button text={"getCurrentUser"} onPress={() => getCurrentUser()} />
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

export default List;
