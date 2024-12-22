import currentIp from "./ip";

const getCurrentUser = async () => {
  try {
    const res = await fetch(`http://${currentIp}:8080/getUserByToken`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const user = await res.json();
    // console.log("Response:", user);
    return user;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export default getCurrentUser;
