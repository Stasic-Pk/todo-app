import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router/build/hooks";

import Button from "../../components/button";
import logOutUser from "../../database/logOutUser";
import deleteUser from "../../database/deleteUser";

const Settings = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Button
        text={"log-out"}
        onPress={async () => {
          await logOutUser();
        }}
      ></Button>
      <Button
        text={"delete account"}
        onPress={async () => {
          await deleteUser()
          router.replace("login")
        }}
      ></Button>
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
