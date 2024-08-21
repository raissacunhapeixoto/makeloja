import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function About4() {
    const handlePress = (url) => {
        Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nossos Contatos</Text>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('https://wa.me/your-whatsapp-number')}>
                <Text style={styles.buttonText}>WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handlePress('https://instagram.com/your-instagram-username')}>
                <Text style={styles.buttonText}>Instagram</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#EDB8AE', // Cor de fundo da tela
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#fff',
    },
    button: {
        backgroundColor: '#AE2A57', // Cor de fundo do botão
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 8,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#DC8691',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
