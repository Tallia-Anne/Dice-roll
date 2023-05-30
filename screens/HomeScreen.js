import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';


const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>DICE APP</Text>
            <View>
                <Pressable onPress={() => navigation.navigate('GameScreen')} >
                    <Text style={styles.button}>Lancer le jeu</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d9b6bc',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
    },
    text: {
        color: '#512c33',
        fontSize: 34,
        fontWeight: 'bold',
        padding: 100
    },
    button: {
        backgroundColor: '#d6798b',
        color: '#553037',
        padding: 12,
        fontSize: 20,
        fontWeight: '700',
        textTransform: 'uppercase',
        borderRadius: 7,

    },
     icon: {
        color: '#FFFFFF',
    },
})

export default HomeScreen;
