import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome5'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>DICE APP</Text>
            <View>
                <Pressable onPress={() => navigation.navigate('GameScreen')} >
                   
                    <Text style={styles.button}>  <Ionicons
                        name='dice-six'
                        color={'#512c33'}
                        size={25}
                    />   Lancer le jeu    <Ionicons
                            name='dice-six'
                            color={'#512c33'}
                            size={25}
                        /> </Text>
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
        fontSize: 35,
        fontWeight: 'bold',
        padding: 100
    },
    button: {
        backgroundColor: '#d6798b',
        color: '#553037',
        padding: 12,
        fontSize: 20,
        fontWeight: '700',
        borderRadius: 7,

    },
    
})

export default HomeScreen;
