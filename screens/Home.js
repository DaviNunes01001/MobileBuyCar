import { Pressable, StyleSheet, Text, View} from 'react-native';


export default function Home({ navigation }) {

  
  return (
    <View style={styles.container}>   
      <Text style={styles.title}>Carrinho de compra</Text>
  
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Carrinho')}
      >
        <Text style={styles.buttonText}>Ir para Carrinho de compras</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8ecff',
    padding: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 8,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: '#020202',
    textAlign: 'center',
    marginBottom: 12,
  },
  counter: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#2233b7',
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