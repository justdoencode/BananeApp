import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    conteiner: {
        position: 'absolute',
        top:400,
        right: 20,
        borderRadius: 100,
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.darkgreen,
    },
    title: {
        color: "white",
        position: "absolute",
        fontSize: 30,

    }
})