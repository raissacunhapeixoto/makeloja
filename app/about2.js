import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

export default function About2() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/images/sobre.jpg')} // Substitua pela URL da sua imagem
                style={styles.image}
                resizeMode='cover'
            />
            
            <Text style={styles.title}>Sobre Nossa Loja</Text>
            
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Nossa Missão</Text>
                <Text style={styles.sectionContent}>
                    Nossa loja online foi criada com o propósito de oferecer produtos de alta qualidade que realçam sua beleza natural e ajudam você a se sentir confiante em qualquer ocasião.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Nossa Visão</Text>
                <Text style={styles.sectionContent}>
                    Em nossa loja, sabemos que a beleza vai além da aparência – é uma expressão de quem você é. Por isso, selecionamos cuidadosamente cada produto, trazendo marcas renomadas e inovações do setor para garantir que você tenha acesso às melhores opções no mercado.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Nossa Oferta</Text>
                <Text style={styles.sectionContent}>
                    Oferecemos uma ampla gama de cosméticos, desde bases e batons até paletas de sombras e cuidados com a pele, tudo em um só lugar. Além disso, estamos comprometidos com um atendimento ao cliente excepcional e uma entrega rápida para que você receba seus produtos com a máxima eficiência.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Explore e Descubra</Text>
                <Text style={styles.sectionContent}>
                    Explore nosso site, descubra novas tendências e encontre os produtos que vão realçar ainda mais sua beleza. Em nossa loja, cada cliente é especial, e nossa equipe está sempre pronta para ajudar você a encontrar exatamente o que precisa para brilhar.
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Agradecimento</Text>
                <Text style={styles.sectionContent}>
                    Obrigado por escolher nossa loja. Estamos empolgados para fazer parte da sua jornada de beleza!
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#f5f5f5', // Cor de fundo
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#333',
    },
    section: {
        marginBottom: 24,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#007BFF', // Cor do título do tópico
    },
    sectionContent: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
    },
});
