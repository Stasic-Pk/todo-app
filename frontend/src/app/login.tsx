import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

import Input from "../components/input";
import Button from "../components/button";
import login from "../database/login";
import getCurrentUser from "../database/getCurrentUser";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const logining = async () => {
    const user = await getCurrentUser();
    console.log(user);

    if (!user) {
      return setError(true);
    }
    router.replace("(tabs)");
  };

  return (
    <View style={styles.container}>
      <Input value={email} setValue={setEmail} placeholder="email" />
      <Input value={password} setValue={setPassword} placeholder="password" />
      {error === true ? (
        <Text style={{ color: "red", fontSize: 15 }}>
          email and password isnt right
        </Text>
      ) : null}
      <Button
        text={"Log-in"}
        onPress={async () => {
          await login(password, email);
          logining();
        }}
      />
      <TouchableOpacity
        onPress={() => router.push("register")}
        style={{ marginTop: 10 }}
      >
        <Text style={{ color: "blue" }}>registration</Text>
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

export default LoginPage;
