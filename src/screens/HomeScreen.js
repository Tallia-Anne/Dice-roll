import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome5'
import colors from '../shared/theme/colors';
import weight from '../shared/theme/weight';



const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>DICE APP</Text>
            <View>
                <Pressable onPress={() => navigation.navigate('GameScreen')} >
                   
                    <Text style={styles.button}>  <Ionicons
                        name='dice-six'
                        color={colors.MARRON}
                        size={25}
                    />   Lancer le jeu    <Ionicons
                            name='dice-six'
                            color={colors.MARRON}
                            size={25}
                        /> </Text>
                </Pressable>
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
        width:'100%',
    },
    text: {
        color: colors.POLICETITLE,
        fontSize: 35,
        fontWeight: weight.BOLD,
        padding: 100
    },
    button: {
        backgroundColor: colors.PINK,
        color: colors.MARRON,
        padding: 12,
        fontSize: 20,
        fontWeight: weight.BOLD,
        borderRadius: 7,

    },
    
})

export default HomeScreen;
