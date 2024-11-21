
import React, { useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";

import styles from "./Login.style";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import auth from "@react-native-firebase/auth"

import { showMessage } from "react-native-flash-message"; //Flash Message Eklentisi

import authErrorMessageParser from "../../../utils/authErrorMessageParser";

const initialFormValues = {
    useremail: "",
    password: "",
}
const Login = ({ navigation }) => {

    const [loading, setLoading] = useState(false);

    const handleSignUp = () => {
        navigation.navigate("SignPage");
    }
    
    async function handleFormSubmit(formValues) {
        try {
            setLoading(true)
            await auth().signInWithEmailAndPassword(formValues.useremail, formValues.password);
            showMessage({
                message:"Başarıyla Giriş Yapıldı",
                type:"success"
            })
            setLoading(false)
        } catch (error) {
            showMessage({
                message:authErrorMessageParser(error.code),
                type:"danger"
            })
            setLoading(false)
        }
    }
    return (
        <SafeAreaView style={styles.conteiner}>
            <Text style={styles.header}>bana ne?</Text>
            <Text style={styles.title}>Login</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleSubmit }) => (

                    <>
                        <Input
                            value={values.useremail}
                            onType={handleChange('useremail')}
                            placeholder={"e postanızı giriniz.."}
                        />

                        <Input
                            value={values.password}
                            onType={handleChange('password')}
                            placeholder={"şifrenizi giriniz"}
                            isSecure
                        />

                        <Button text={"Giriş Yap"} theme="primary" onPress={handleSubmit} loading={loading}/>
                    </>
                )}
            </Formik>
            <Button text={"Kayıt Ol"} theme="secondary" onPress={handleSignUp} />
        </SafeAreaView>
    )
}

export default Login;