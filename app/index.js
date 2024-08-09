
import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EDB8AE'
      }}
    >

      {/* <Text
        style={{ fontFamily: 'Roboto-Light', fontWeight: 'bold', marginBottom: 20, marginTop: 20, color: '#EDB8AE', fontSize: 20 }}
      >
              Coffee With Programation
      </Text> */}

      { <Image
        style={{
          width: 400,
          height: 500,
          borderRadius: 0
        }}
        source={require('../assets/images/menu2.jpg')}
      /> }

      <Text
        style={{ fontWeight: 'bold', marginBottom: 20, marginTop: 20, color: '#7D1836', fontSize: 20 }}>
       
        {'Conheça nossos produtos'}
        </Text>


      <Link href="/products" style={styles.button} asChild>
        <Pressable >

          <Text style={styles.buttonText}>
            ver catálogo            
          </Text>

        </Pressable>
      </Link>



    </View>
  );
}

const styles = StyleSheet.create({

  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 20,
    backgroundColor: '#7D1836',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 30,

  },
  buttonText: {
    fontSize: 18,
    color: '#FAE7F0',
    fontWeight: 'bold',
  },
});
