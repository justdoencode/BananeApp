
import React, { useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import styles from "./Sign.style";
import { Formik } from "formik";
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";
import auth, { createUserWithEmailAndPassword } from "@react-native-firebase/auth";

import * as Yup from 'yup';



const initialFormValues = {
    useremail: "",
    password: "",
    repassword: "",
}

const Sign = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        navigation.navigate("LoginPage")
    }

    async function handleFormSubmit(formValues) {

        

        if (formValues.password != formValues.repassword) {
            showMessage({
                message: "Şifreler Aynı Değil",
                type: "danger",
            })
            return;
        }
        setLoading(true)

        try {
            await auth().createUserWithEmailAndPassword(formValues.useremail, formValues.repassword);
            setLoading(false)
            showMessage({
                message: "Kullanıcı Oluşturuldu",
                type: "success",
            })
            navigation.navigate("LoginPage")
        } catch (error) {
           setLoading(false)
        }
    }

    return (
        <SafeAreaView style={styles.conteiner}>
            <Text style={styles.header}>bana ne?</Text>
            <Text style={styles.title}>Sign In</Text>

            <Formik
                initialValues={initialFormValues}
                onSubmit={handleFormSubmit}
            >
                {({ values, handleChange, handleSubmit }) => (
                    <>
                        <Input
                            value={values.useremail}
                            onType={handleChange('useremail')}
                            placeholder={"e postanızı giriniz.."} />

                        <Input
                            value={values.password}
                            onType={handleChange('password')}
                            placeholder={"şifrenizi giriniz"} 
                            isSecure
                            />

                        <Input
                            value={values.repassword}
                            onType={handleChange('repassword')}
                            placeholder={"şifrenizi tekrar giriniz"}
                            isSecure
                        />

                        <Button text={"Kayıt Ol"} theme="primary" onPress={handleSubmit} loading={loading} />
                    </>
                )}
            </Formik>
            <Button text={"Giriş Yap"} theme="secondary" onPress={handleLogin} />
        </SafeAreaView>
    )
}

export default Sign;