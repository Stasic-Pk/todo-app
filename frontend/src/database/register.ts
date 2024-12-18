import currentIp from "./ip";

const registration = async (
  username: string,
  password: string,
  email: string
) => {
  try {
    const registrationUser = {
      username: username,
      password: password,
      email: email,
    };

    const res = await fetch(`http://${currentIp}:8080/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationUser),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    // console.log("Response data:", data);
  } catch (error) {
    console.error("Error sending POST request:", error);
  }
};

export default registration;
