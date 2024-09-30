import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native';

export default function Flex() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.item}>
                <Image style={styles.image} source={require('../assets/images/filial1.jpg')} />
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>CenterVale Shopping</Text>
                    <Text style={styles.subtitle}>Seg a Sab 10:00 às 22:00 | Domingo 10:00 às 20:00</Text>
                    <Text style={styles.address}>Av. Dep. Benedito Matarazzo, 9403 - Jardim Oswaldo Cruz, São José dos Campos - SP</Text>
                    <Pressable style={styles.button} onPress={() => {/* Handle button press */}}>
                        <Text style={styles.buttonText}>fazer encomenda</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.item}>
                <Image style={styles.image} source={require('../assets/images/filial2.png')} />
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Via Vale Shopping</Text>
                    <Text style={styles.subtitle}>Seg a Sab 10:00 às 22:00 | Domingo 10:00 às 20:00</Text>
                    <Text style={styles.address}>Av. Dom Pedro I, 7181 - Res. Estoril, Taubaté - SP</Text>
                    <Pressable style={styles.button} onPress={() => {/* Handle button press */}}>
                        <Text style={styles.buttonText}>fazer encomenda</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.item}>
                <Image style={styles.image} source={require('../assets/images/filial3.jpg')} />
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Eco Valle Shopping</Text>
                    <Text style={styles.subtitle}>Seg a Sab 10:00 às 22:00 | Domingo 10:00 às 20:00</Text>
                    <Text style={styles.address}>Rod. Presidente Dutra KM 53 Santa Lucrécia, Lorena - SP</Text>
                    <Pressable style={styles.button} onPress={() => {/* Handle button press */}}>
                        <Text style={styles.buttonText}>fazer encomenda</Text>
                    </Pressable>
                </View>
            </View>
            
            <View style={styles.item}>
                <Image style={styles.image} source={require('../assets/images/filial4.jpg')} />
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>Buriti Shopping</Text>
                    <Text style={styles.subtitle}>Seg a Sab 10:00 às 22:00 | Domingo 10:00 às 20:00</Text>
                    <Text style={styles.address}>Av. Juscelino Kubitscheck de Oliveira - Campo do Galvão, Guaratinguetá - SP</Text>
                    <Pressable style={styles.button} onPress={() => {/* Handle button press */}}>
                        <Text style={styles.buttonText}>fazer encomenda</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#EDB8AE'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'flex-start', // Alinha imagem e texto no início
        marginBottom: 75
    },
    image: {
        width: 175,
        height: 175,
        marginRight: 16
    },
    textWrapper: {
        flex: 1, // Expande para ocupar o espaço disponível
        alignItems: 'flex-start' // Alinha o texto à esquerda
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#7D1836' // Cor do texto
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 8,
        color: '#fff' // Cor mais clara para o texto secundário
    },
    address: {
        fontSize: 14,
        marginBottom: 12, // Espaçamento abaixo do endereço
        color: '#AE2A57' // Cor para o endereço
    },
    button: {
        backgroundColor: '#7D1836', // Cor de fundo do botão
        borderRadius: 5, // Borda arredondada
        paddingVertical: 10, // Espaçamento vertical interno
        paddingHorizontal: 16, // Espaçamento horizontal interno
        alignItems: 'center', // Centraliza o texto dentro do botão
        marginTop: 8 // Espaçamento acima do botão
    },
    buttonText: {
        color: '#fff', // Cor do texto do botão
        fontSize: 14
    }
});
