import { StyleSheet, View } from "react-native";
import { useState } from "react";

import Input from "../components/input";
import Button from "../components/button";
import registration from "../database/register";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Input value={username} setValue={setUsername} placeholder="username" />
      <Input value={email} setValue={setEmail} placeholder="email" />
      <Input value={password} setValue={setPassword} placeholder="password" />
      <Button
        text={"login, email i parol"}
        onPress={() => registration(username, password, email)}
      />
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

export default RegisterPage;
