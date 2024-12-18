import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

import Input from "../components/input";
import Button from "../components/button";
import login from "../database/login";
import getUsers from "../database/getUsers";
import getCurrentUser from "../database/getCurrentUser";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Input value={email} setValue={setEmail} placeholder="email" />
      <Input value={password} setValue={setPassword} placeholder="password" />
      <Button text={"Log-in"} onPress={() => login(password, email)} />
      {/* <Button text={"getUsers"} onPress={() => getUsers()} />
      <Button text={"getCurrentUser"} onPress={() => getCurrentUser()} />

      <TouchableOpacity onPress={() => router.push("register")}>
        <Text style={{ color: "blue" }}>Registration</Text>
      </TouchableOpacity> */}
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
