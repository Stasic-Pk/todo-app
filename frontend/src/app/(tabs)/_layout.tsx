import { FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "list",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="addNewToDo"
        options={{
          tabBarLabel: "new",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="plus" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default layout;
