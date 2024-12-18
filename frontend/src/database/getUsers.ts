import currentIp from "./ip";

const getUsers = async () => {
  try {
    const res = await fetch(`http://${currentIp}:8080/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const users = await res.json();
    // console.log("Response:", users);
    return users;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default getUsers;
