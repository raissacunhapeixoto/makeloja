import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

export default function Flex() {
    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Mari Maria Makeup</Text>
                </View>
                <View style={styles.cardContent}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={require('../assets/images/marimaria2.jpg')}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.link}>https://www.marimariamakeup.com/</Text>
                    </View>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Fran</Text>
                </View>
                <View style={styles.cardContent}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={require('../assets/images/fran.jpg')}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.link}>https://www.franbyfr.com.br</Text>
                    </View>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Ruby Rose</Text>
                </View>
                <View style={styles.cardContent}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={require('../assets/images/ruby.jpg')}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.link}>https://www.rubyrosemaquiagem.com.br/</Text>
                    </View>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Bruna Tavares</Text>
                </View>
                <View style={styles.cardContent}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={require('../assets/images/bruna2.jpg')}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.link}>https://www.linhabrunatavares.com/</Text>
                    </View>
                </View>
            </View>

            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Nars</Text>
                </View>
                <View style={styles.cardContent}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            source={require('../assets/images/nars.jpg')}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.link}>https://www.narscosmetics.com.br/maquiagem/</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        display:'flex',
        backgroundColor: '#EDB8AE',
        padding: 10
    },
    card: {
        backgroundColor: '#DC8691',
        borderRadius: 8,
        elevation: 5, // Shadow on Android
        shadowColor: '#000000', // Shadow on iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginBottom: 10,
        padding: 10
    },
    cardHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold', 
        color: '#fff'
    },
    cardContent: {
        flexDirection: 'row'
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 150,
        height: 150
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,

    },
    link: {
        color: '#7D1836', // Color for link-like text
        textDecorationLine: 'underline'
    }
});
