import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// lol
const Settings = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Link href={"https://github.com/Stasic-Pk/todo-app"}>
          <Text style={{ color: "blue" }}>go to settings</Text>
        </Link>
      </TouchableOpacity>
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

export default Settings;
