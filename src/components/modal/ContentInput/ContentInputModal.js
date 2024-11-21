import React, { useState } from "react";
import { TextInput, View } from "react-native";

import styles from "./ContentInputModal.style";
import Button from "../../Button/Button";
import Modal from "react-native-modal";


const ContentInputModal = ({ visible, onClose, onSend }) => {
    const [text, setText] = useState("");
    
    function handleSend(){
        if(!text){
            return
        }
        onSend(text)
        setText(null)
    }

    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
        >
            <View style={styles.conteiner}>
                <View style={styles.input_conteiner}>
                    <TextInput placeholder="Düşüncelerin..?" onChangeText={setText} multiline />
                </View>
                <Button text="Gönder" onPress={handleSend} />
            </View>
        </Modal>

    )
}

export default ContentInputModal;