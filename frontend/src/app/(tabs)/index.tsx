import { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Platform } from "react-native";
import { useNavigation, useSegments } from "expo-router";

import getCurrentUser from "../../database/getCurrentUser";
import Button from "../../components/button";
import removeTodo from "../../database/removeTodo";

const List = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isFocused = useNavigation();
  const OS = Platform.OS;
  useSegments();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCurrentUser();
        console.log("update!");
        setTodoList(data.todoList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [isFocused.isFocused()]);

  return (
    <ScrollView
      style={OS == "ios" ? styles.iosScroll : { backgroundColor: "#fff" }}
    >
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
                {todo.todoName ? (
                  <Text key={i} style={{ fontSize: 20 }}>
                    {todo.todoName}
                  </Text>
                ) : null}
                {todo.todo ? <Text key={todo}>{todo.todo}</Text> : null}
                <View style={{ flexDirection: "row-reverse" }}>
                  <Button
                    key={"Button"}
                    text={"remove"}
                    onPress={() => {
                      removeTodo(todo);
                      setTodoList(
                        todoList.filter(
                          (element) => element._id !== todo._id,
                          1
                        )
                      );
                    }}
                  />
                </View>
              </View>
            );
          })
        ) : isLoading === true ? (
          <Text>Loading...</Text>
        ) : (
          <Text style={{ paddingTop: "85%", fontSize: 24 }}>
            You dont have to-do
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iosScroll: {
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  container: {
    flex: 0,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  todo: {
    backgroundColor: "#ededed",
    borderRadius: 6,
    width: 300,
    padding: 10,
    marginTop: 12,
  },
  bottomTodo: {
    backgroundColor: "#ededed",
    borderRadius: 6,
    width: 300,
    padding: 10,
    marginTop: 12,
    marginBottom: 12,
  },
});

export default List;
