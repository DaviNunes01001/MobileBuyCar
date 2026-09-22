import { Pressable, StyleSheet, Text, View, Image} from 'react-native';


export default function Home({ navigation, contador }) {
  return (
    <View style={styles.container}>
        <Image source={require("../assets/carjpg.jpg")}
        style={styles.img}/>    
      <Text style={styles.title}>Biscoito da Sorte</Text>
      <Text style={styles.subtitle}>Descubra uma mensagem especial para o seu dia.</Text>
      <Text style={styles.counter}>Cliques: {contador}</Text>

    

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Biscoito')}
      >
        <Text style={styles.buttonText}>Ir para Biscoito</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe7e7',
    padding: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5a0c0c',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#7d2a2a',
    textAlign: 'center',
    marginBottom: 12,
  },
  counter: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5a0c0c',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#b72222',
    paddingHorizontal: 26,
    paddingVertical: 14,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    margin: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  img: {
    height: 200,
    width:200,
    borderRadius:20,
    margin: 10
  }
});