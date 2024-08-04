import { useReactiveClient } from "@dynamic-labs/react-hooks";
import { FC } from "react";
import { client } from "../client";
import { LoginView } from "../LoginView";
import { HomeView } from "./HomeView";
import { Text } from "react-native";

export const Home: FC = () => {
  const { auth, sdk, wallets } = useReactiveClient(client);

  if (!sdk.loaded) {
    return <Text>Loading...</Text>;
  }

  if (auth.token) {
    return <HomeView />;
  }

  return <LoginView />;
};
