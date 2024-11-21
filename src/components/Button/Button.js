
import React from "react"
import { ActivityIndicator, Button, Text, TouchableOpacity, View } from "react-native"

import styles from "./Button.style";

export default function ({ text, onPress, theme = "primary",loading=false }) {

    return (
        <TouchableOpacity style={styles[theme].conteiner} onPress={onPress} disabled={loading}>
            {
                loading ? (
                    <ActivityIndicator color="white" />
                ) : (
                    <View style={styles[theme].button_conteiner}>
                        <Text style={styles[theme].title}>{text}</Text>
                    </View>
                )
            }

        </TouchableOpacity>
    )
}