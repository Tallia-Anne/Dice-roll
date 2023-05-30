import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation as FoundationIcons } from 'react-native-vector-icons';
import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/GameScreen';


const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
    return (
        // backBehavio permet de revenir à la page précédente par ordre exemple sur la page de connexion
        <Tab.Navigator backBehavior='order' >
            <Tab.Screen
                name="HomeScreen"

                component={HomeScreen}
                options={
                    {

                        tabBarlabel: "Accueil",
                        tabBarActiveTintColor: "#d6798b",
                        tabBarInactiveTintColor: "#d9b6bc",
                        tabBarIcon: ({ color, size }) => (
                            <FoundationIcons name="home" color={color} size={size} />
                        ),
                        title: "Accueil",
                    }
                }
            />
            <Tab.Screen
                name="Test"
                component={TestScreen}
                options={
                    {
                        tabBarlabel: "Jouer",
                        tabBarActiveTintColor: "#d6798b",
                        tabBarInactiveTintColor: "#d9b6bc",
                        tabBarIcon: ({ color, size }) => (
                            <FoundationIcons name="dice-six" color={color} size={size} />
                        ),
                        title: "Jouer",
                    }
                }
            />

        </Tab.Navigator>
    );
}



export default NavigationTabs;
