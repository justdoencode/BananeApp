import { Text, TouchableOpacity } from "react-native";

import styles from "./FloatingButton.style"



export default function({onPress}){

    return(
        <TouchableOpacity style={styles.conteiner} onPress={onPress}>
            <Text style={styles.title}>+</Text>
        </TouchableOpacity>
    )
}