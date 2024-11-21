
import React from "react";
import { TextInput, unstable_batchedUpdates, View } from "react-native";

import styles from "./Input.style";



const Input = ({ placeholder, value, onType, isSecure }) => {
    return (
        <View style={styles.conteiner}>
            <TextInput style={styles.input}
                placeholder={placeholder}
                onChangeText={onType}
                value={value}
                secureTextEntry={isSecure}
            />
        </View>

    )
}

export default Input;