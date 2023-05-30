import React from 'react';
import { View, StyleSheet, Image } from 'react-native';



import dice0 from '../assets/logo/dice-0.png';
import dice1 from '../assets/logo/dice-1.png';
import dice2 from '../assets/logo/dice-2.png';
import dice3 from '../assets/logo/dice-3.png';
import dice4 from '../assets/logo/dice-4.png';
import dice5 from '../assets/logo/dice-5.png';
import dice6 from '../assets/logo/dice-6.png';




const DiceGame = ({ firstvaleur, secondvaleur }) => {

    const getDiceImage = (value) => {
        switch (value) {

            case 1:
                return dice1;
            case 2:
                return dice2;
            case 3:
                return dice3;
            case 4:
                return dice4;
            case 5:
                return dice5;
            case 6:
                return dice6;
            default:
                return dice0;
        }
    };

    const firstDiceImage = getDiceImage(firstvaleur);
    const secondDiceImage = getDiceImage(secondvaleur);

    return (
        <View style={styles.container}>

            <View style={styles.de} >
                <Image source={firstDiceImage} style={styles.imgde} />
            </View>

            <View style={styles.de} >
                <Image source={secondDiceImage} style={styles.imgde} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 120
    },

    de: {
        width: 120,
        height: 120,
        borderRadius: 4,
        padding: 12,
    },
    imgde: {
        width: '100%',
        height: '100%',
        borderRadius: 4,

    }
})

export default DiceGame;
