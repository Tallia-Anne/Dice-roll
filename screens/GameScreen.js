import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { DiceGame } from '../components';

const GameScreen = () => {
    
    const [score, setScore] = useState(0);

    const [firstvaleur, setfirstvaleur] = useState(0);

    const [secondvaleur, setsecondvaleur] = useState(0);


    function LancerDe() {
        
        const randomNumber1 = (min = 1, max = 6) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const randomNumber = (min = 1, max = 6) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const newFirstvaleur = randomNumber();
        const newSecondvaleur = randomNumber1();
        console.log('firstvaleur: ' + newFirstvaleur);
        console.log('secondvaleur: ' + newSecondvaleur);
        setfirstvaleur(newFirstvaleur);
        setsecondvaleur(newSecondvaleur);
        setScore(newFirstvaleur + newSecondvaleur);

    }
    console.log('Score: '+score);

    function reinitialiser() {
        setScore(0);
        setsecondvaleur(0)
        setfirstvaleur(0);

    }
    
    return (
        <View style={styles.container}>
            
            <Text style={styles.title} >Résultat</Text>
            <Text style={styles.title} >{score}</Text>
            <View style={styles.containergris} >
                <View style={styles.wrap} >
                    <View style={styles.bouton} >
                        <Pressable onPress={reinitialiser}>
                            <Text style={styles.reni} > Réinitialiser</Text>
                        </Pressable>
                    </View>

                    <DiceGame
                        firstvaleur={firstvaleur}
                        secondvaleur={secondvaleur}
                    />

                    <View style={styles.bouton} >
                        <Pressable onPress={LancerDe}>
                            <Text style={styles.lancer} >Lancer les dés</Text>
                        </Pressable>
                    </View>
                </View>
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
       
        padding: 32,
    },
    title: {
        color: '#d6798b',
        fontSize: 30,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    containergris: {
        backgroundColor: '#eeeaeb',
        height: 150,
        width: 300,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
    },

    wrap: {
        padding: 20,
        backgroundColor: '#f6f0f2',
        width: '90%',
        height: '90%'

    },

    bouton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    reni: {
        padding: 12,
        backgroundColor: '#9d5465',
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: '700',
        borderRadius: 7,

    },
    lancer: {
        padding: 12,
        backgroundColor: '#d9b6bc',
        color: '#553037',
        borderColor: '#553037',
        textTransform: 'uppercase',
        fontWeight: '700',
        borderRadius: 7,
    }
})

export default GameScreen;
