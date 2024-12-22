import { StyleSheet, View } from "react-native";
import { useState } from "react";

import Input from "../../components/input";
import Button from "../../components/button";
import updateUserData from "../../database/updateUserData";

const AddNewToDo = () => {
  const [name, setName] = useState();
  const [value, setValue] = useState();

  return (
    <View style={styles.container}>
      <Input value={name} setValue={setName} placeholder={"todo name"} />
      <Input value={value} setValue={setValue} placeholder={"todo"} multiline={true}/>

      <Button
        text={"add"}
        onPress={async () => {
          updateUserData(null, { todoName: name, todo: value });
        }}
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

export default AddNewToDo;
