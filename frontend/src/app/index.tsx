import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import getCurrentUser from "../database/getCurrentUser";

const Index = () => {
  const router = useRouter();

  const logining = async () => {
    const user = await getCurrentUser();
    console.log(user);

    if (!user) {
      return router.replace("login");
    }
    return router.replace("(tabs)");
  };
  logining();

  return (
    <View style={styles.container}>
      <Text>wait a second</Text>
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

export default Index;
