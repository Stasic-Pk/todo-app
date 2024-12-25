//removeTodo
import getCurrentUser from "./getCurrentUser";
import currentIp from "./ip";

const removeTodo = async (todo: { todoName: string; todo: string }) => {
  try {
    const updatedData = {
      todo: todo,
    };

    const user = await getCurrentUser();
    const id = user._id;

    const res = await fetch(`http://${currentIp}:8080/removeTodo/${id}`, {
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

export default removeTodo;
