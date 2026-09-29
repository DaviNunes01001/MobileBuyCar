import { useState } from "react";
import {TextInput, Pressable, StyleSheet, Text, View } from "react-native";

export default function Carrinho({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Carrinho</Text>
      </View>
      
      <View style={styles.Cont_two}>
        <TextInput style={styles.input}
        placeholder="Digite um produto"
        ></TextInput>
        <View style={styles.block}>
          <Text style={styles.nameProd}>Name</Text>
          <Pressable style={styles.ButtonExcluir}>
            <Text>Excluir</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  // Tela inteira
  container: {
    flex: 1,
    backgroundColor: "#e8ecff",
  },

  // Cabeçalho
  header: {
    height: 80,
    backgroundColor: "#053bff",
    alignItems: "center",
    justifyContent: "center",
  },

  // Título
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
  },

  // Área dos produtos
  Cont_two: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },

  // Campo de pesquisa
  input: {
    width: 320,
    height: 45,

    // Linha fina
    borderWidth: 1,
    borderColor: "#999999",

    borderRadius: 8,

    paddingHorizontal: 15,

    backgroundColor: "#ffffff",

    marginBottom: 10,
  },

  // Bloco do produto
  block: {
    width: 350,
    height: 60,

    backgroundColor: "#c3cbdb",

    marginTop: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderRadius: 30,

    // Sombra Android
    elevation: 5,

    // Sombra iOS
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  // Nome do produto
  nameProd: {
    marginLeft: 15,
    color: "#000000",
    fontSize: 22,
  },

  // Botão excluir
  ButtonExcluir: {
    padding: 8,
    backgroundColor: "#ff0000",
    borderRadius: 10,
    marginRight: 10,
  },

});