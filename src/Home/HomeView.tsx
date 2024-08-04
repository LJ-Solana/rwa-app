import { FC } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { client } from "../client";
import { useReactiveClient } from "@dynamic-labs/react-hooks";

export const HomeView: FC = () => {
  const { auth, wallets } = useReactiveClient(client);

  return (
    <View style={styles.container}>

      <View style={styles.section}>
        <Text style={styles.section__heading}>Wallets:</Text>
        <View style={styles.content_section}>
          {wallets.userWallets.map((wallet) => (
            <View>
              <Text>{wallet.address}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "stretch",
    gap: 40,
    padding: 20,
  },

  scroll: {
    alignContent: "stretch",
  },

  heading: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -50,
  },

  heading__text: {
    fontSize: 20,
  },

  error: {
    color: "red",
  },

  section: {
    gap: 5,
  },

  section__heading: {
    fontSize: 14,
    fontWeight: "bold",
  },

  content_section: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#f9f9f9",
  },

  actions_section: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
});
