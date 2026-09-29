import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Carrinho({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Carrinho</Text>
      </View>
      <View style={styles.Cont_two}>
      <View style={styles.block}>
        <Text>Produto:</Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: "#053bff",
    padding: 24,
    height: 80,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 24,
    textAlign: "center",
  },
  block: {
    backgroundColor: "#c3cbdb",
    height: 60,
    width: 350,
    marginTop: 20,
    alignItems:"center",
    justifyContent:"center",
    borderRadius: 30
  },
  Cont_two:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
    }
});
