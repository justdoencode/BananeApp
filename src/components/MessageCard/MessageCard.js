
import React from "react";
import { Text, View } from "react-native";

import styles from "./MessageCard.style"

import { formatDistance, parseISO } from "date-fns"
import Button from "../Button/Button";



const MessageCard = ({ message,onBanane }) => {
    const formatedDate = formatDistance(parseISO(message.date), new Date(), {
        addSuffix: true,
    })
    return (
        <View style={styles.conteiner}>
            <View style={styles.inner_conteiner}>
                <Text style={styles.user}>{message.username}</Text>
                <Text style={styles.date}>{formatedDate}</Text>
            </View>
            <Text style={styles.title}>{message.text}</Text>
            <View style={styles.button_conteiner}>
                <Text>{message.dislike}</Text>
                <Button text="bana ne?" theme="secondary" onPress={onBanane}/>
            </View>
        </View>
    )
}

export default MessageCard;