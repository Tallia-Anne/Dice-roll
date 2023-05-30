import { Dimensions } from "react-native";


export function getWidth() {
    const windowWidth = Dimensions.get('window').width;
    return windowWidth;
}

export function getHeight() {
    const windowHeight = Dimensions.get('window').height;
    return windowHeight;
}