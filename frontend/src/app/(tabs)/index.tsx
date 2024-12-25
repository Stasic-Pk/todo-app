import { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useNavigation, useSegments } from "expo-router";

import getCurrentUser from "../../database/getCurrentUser";
import Button from "../../components/button";
import removeTodo from "../../database/removeTodo";
import { reload } from "expo-router/build/global-state/routing";

const List = () => {
  const [todoList, setTodoList] = useState([]);
  const isFocused = useNavigation();
  useSegments();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCurrentUser();
        console.log("update!");
        setTodoList(data.todoList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [isFocused.isFocused()]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {todoList.length !== 0 ? (
          todoList.map((todo, i) => {
            return (
              <View
                key={todo._id}
                style={
                  i === todoList.length - 1 ? styles.bottomTodo : styles.todo
                }
              >
                <Text key={i} style={{ fontSize: 20 }}>
                  {todo.todoName}
                </Text>
                <Text key={todo}>{todo.todo}</Text>
                <Button
                  key={"Button"}
                  text={"delete task"}
                  onPress={() => {
                    console.log(todo);
                    removeTodo(todo);
                  }}
                />
              </View>
            );
          })
        ) : (
          <Text>Loading...</Text> // fix it, if user dont have todo, it display
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  todo: {
    backgroundColor: "#ededed",
    borderRadius: 6,
    minHeight: 100,
    width: 300,
    paddingTop: 6,
    padding: 10,
    marginTop: 12,
  },
  bottomTodo: {
    backgroundColor: "#ededed",
    borderRadius: 6,
    minHeight: 100,
    width: 300,
    paddingTop: 6,
    padding: 10,
    marginTop: 12,
    marginBottom: 12,
  },
});

export default List;
