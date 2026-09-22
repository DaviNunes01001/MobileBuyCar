import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Biscoito({ navigation, contador, setContador }) {
  const frases = [
    "A vida é 10% o que acontece com você e 90% como você reage a isso.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Acredite em si mesmo e todo o resto virá naturalmente.",
    "A persistência é o caminho do êxito.",
    "Não espere por oportunidades, crie-as.",
    "A única maneira de fazer um excelente trabalho é amar o que você faz.",
    "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    "A vida é uma aventura ousada ou não é nada.",
    "Não importa quantas vezes você falhe, o que importa é quantas vezes você se levanta.",
    "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
  ];

  const [fraseAtual, setFraseAtual] = useState("");
  const [imagemAtual, setImagemAtual] = useState(false);

  function abrirBiscoito() {
    const indice = Math.floor(Math.random() * frases.length);
    const frase = frases[indice];

    setContador((prev) => prev + 1);
    setFraseAtual(frase);
    setImagemAtual(true);
  }

  function voltarBiscoito() {
    setFraseAtual("");
    setImagemAtual(false);
    navigation.goBack();
  }

   function LimparContador() {
    setContador(0)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biscoito da Sorte</Text>
      <Text style={styles.contador}>Cliques: {contador}</Text>

      {!imagemAtual ? (
        <>
          <Pressable onPress={abrirBiscoito}>
            <Image
              source={require("../assets/biscoito.svg")}
              style={styles.image}
              resizeMode="contain"
            />
          </Pressable>

          <Text style={styles.instrucao}>Toque no biscoito para quebrar</Text>
        </>
      ) : (
        <>
          <Image
            source={require("../assets/biscoito-quebrado.svg")}
            style={styles.image}
            resizeMode="contain"
          />

          <View style={styles.fraseContainer}>
            <Text style={styles.frase}>“{fraseAtual}”</Text>
          </View>

          <Pressable style={styles.botao} onPress={voltarBiscoito}>
            <Text style={styles.textoBotao}>Voltar</Text>
          </Pressable>

          <Pressable style={styles.botao} onPress={LimparContador}>
            <Text style={styles.textoBotao}>Limpar Contador</Text>
          </Pressable>

          
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffe7e7",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#5a0c0c",
    marginBottom: 24,
    textAlign: "center",
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 16,
  },
  instrucao: {
    fontSize: 16,
    color: "#7d2a2a",
    textAlign: "center",
  },
  contador: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5a0c0c",
    marginBottom: 16,
  },
  fraseContainer: {
    backgroundColor: "#f4a8a8",
    borderRadius: 16,
    padding: 20,
    marginVertical: 18,
    width: "100%",
    maxWidth: 330,
  },
  frase: {
    fontSize: 18,
    lineHeight: 28,
    color: "#4d1818",
    textAlign: "center",
    fontStyle: "italic",
  },
  botao: {
    backgroundColor: "#ff0e09",
    paddingHorizontal: 26,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 8,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
