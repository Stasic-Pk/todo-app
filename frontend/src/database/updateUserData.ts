import getCurrentUser from "./getCurrentUser";
import currentIp from "./ip";

const updateUserData = async (
  username: string,
  todoList: { todoName: string; todo: string }
) => {
  try {
    const updatedData = {
      username: username,
      todoList: todoList,
    };

    const user = await getCurrentUser()
    const id = user._id

    const res = await fetch(`http://${currentIp}:8080/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log("Response:", data);
  } catch (error) {
    console.error("Error sending POST request:", error);
  }
};

export default updateUserData;
