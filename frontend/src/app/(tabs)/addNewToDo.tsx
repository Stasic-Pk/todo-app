import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";

import Input from "../../components/input";
import Button from "../../components/button";
import addTodo from "../../database/addTodo";

const AddNewToDo = () => {
  const [name, setName] = useState();
  const [value, setValue] = useState();
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <View style={styles.container}>
      <Input value={name} setValue={setName} placeholder={"todo name"} />
      <Input
        value={value}
        setValue={setValue}
        placeholder={"todo"}
        multiline={true}
      />
      <Button
        text={"add"}
        onPress={async () => {
          if (!name && !value) {
            return setIsEmpty(true);
          }
          addTodo({ todoName: name, todo: value });
          setIsEmpty(false);
        }}
      />

      {isEmpty === true ? (
        <Text style={{ color: "#e34d6b" }}>
          Type something on todo name or todo
        </Text>
      ) : null}
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
