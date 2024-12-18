import { FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          headerTitle: "Home Screen",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default layout;
