import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/menu2.jpg')}
      />

      <Text style={styles.title}>
        {'Conheça nossos produtos'}
      </Text>

      <Link href="/products" style={styles.button} asChild>
        <Pressable style={styles.buttonPressable}>
          <Text style={styles.buttonText}>
            ver catálogo
          </Text>
        </Pressable>
      </Link>

      <Link href="/about2" style={styles.button} asChild>
        <Pressable style={styles.buttonPressable}>
          <Text style={styles.buttonText}>
            sobre nossa loja
          </Text>
        </Pressable>
      </Link>
    
          <Link href="/flex" style={styles.button} asChild>
          <Pressable style={styles.buttonPressable}>
            <Text style={styles.buttonText}>
            marcas
            </Text>
          </Pressable>
        </Link>

        <Link href="/about4" style={styles.button} asChild>
          <Pressable style={styles.buttonPressable}>
            <Text style={styles.buttonText}>
            entre em contato
            </Text>
          </Pressable>
        </Link>

      </View>

      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDB8AE',
  },
  image: {
    width: 400,
    height: 400,
    borderRadius: 0,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: '#7D1836',
    fontSize: 20,
  },
  button: {
    margin: 10,
    backgroundColor: '#7D1836',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 30,
    width: 200, // Set a width to ensure buttons are the same size
  },
  buttonPressable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FAE7F0',
    fontWeight: 'bold',
  },
});
