
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import FloatingButton from "../../components/FloatingButton/FloatingButton";
import ContentInputModal from "../../components/modal/ContentInput/ContentInputModal";

import database from "@react-native-firebase/database"
import auth from "@react-native-firebase/auth"
import parseContentData from "../../utils/parseContentData";
import { FlatList } from "react-native";
import MessageCard from "../../components/MessageCard/MessageCard";






const Messages = () => {
    const [inputModalVisible, setInputModalVisible] = useState(false);
    const [contentList, setContentList] = useState([]);

    useEffect(() => {
        database()
            .ref("messages/")
            .on("value", snapshot => {
                const contentData = snapshot.val()
                
                const parsedData = parseContentData(contentData || {})
                setContentList(parsedData)
            })
    }, [])

    function handleInputModalClose() {
        setInputModalVisible(false);
    }

    function handleSendContent(content) {
        sendContent(content)
    }

    function sendContent(content) {
        const userMail = auth().currentUser.email

        const contentObject = {
            text: content,
            username: userMail.split('@')[0],
            date: (new Date()).toISOString(),
            dislike:0,
        }
        database().ref("messages/").push(contentObject)
        handleInputModalClose();
    }

    function handleInputToggle() {
        setInputModalVisible(!inputModalVisible)
    }

    function handleBanane(item){
        database()
            .ref(`messages/${item.id}`)
            .update({dislike: item.dislike +1});
    }

    const renderContent=({item})=><MessageCard message={item} onBanane={()=>handleBanane(item)}/>
    return (
        <SafeAreaView>

            <FlatList
                data={contentList}
                renderItem={renderContent}
            />

            <FloatingButton onPress={handleInputToggle} />
            <ContentInputModal
                visible={inputModalVisible}
                onClose={handleInputModalClose}
                onSend={handleSendContent}
            />
        </SafeAreaView>
    )
}

export default Messages;