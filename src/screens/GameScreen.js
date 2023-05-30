import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { DiceGame } from '../components';
import colors from '../shared/theme/colors';
import weight from '../shared/theme/weight';
import { getHeight, getWidth } from '../shared/constants/ScreenSize';



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
                            <Text style={styles.lancer} >  Lancer les dés  </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.FOND,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
        padding: 32,
    },
    title: {
        color: colors.PINK,
        fontSize: 30,
        fontWeight: weight.BOLD,
    },
    containergris: {
        backgroundColor: colors.GRIS,
        height: (getHeight()-20),
         width: (getWidth()- 60 ),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        elevation: 2,
    },

    wrap: {
        padding: 20,
        backgroundColor: colors.GRISCLAIR,
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
        backgroundColor: colors.RENI,
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: weight.BOLD,
        borderRadius: 7,

    },
    lancer: {
        padding: 12,
        backgroundColor: colors.FOND,
        color: colors.MARRON,
        borderWidth: 2,
        borderColor: '#553037',
        textTransform: 'uppercase',
        fontWeight: weight.BOLD,
        borderRadius: 8,
    }
})

export default GameScreen;
