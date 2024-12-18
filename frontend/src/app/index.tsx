import { useRouter } from "expo-router";

import getCurrentUser from "../database/getCurrentUser";

const Index = () => {
  const logining = async () => {
    const router = useRouter();

    const user = await getCurrentUser();
    console.log(user);

    if (!user) {
      return router.replace("login");
    }
    return router.replace("(tabs)");
  };
  logining();
};

export default Index;
