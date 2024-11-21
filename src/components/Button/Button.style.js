import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const base_style= StyleSheet.create({
    conteiner:{
        margin:10,
        padding:10,
        alignItems:"center",
        borderRadius:20,
    },
    button_conteiner:{
        flexDirection:"row",
        alignItems:"center",
    },
    title:{
        marginLeft:5,
        fontWeight:"bold",
        fontSize:17,
        color:"white",
    }
})

export default {
    primary: StyleSheet.create({
        ...base_style,
        conteiner:{
            ...base_style.conteiner,
            backgroundColor: colors.darkgreen,
        },
        title:{
            ...base_style,
            color:"white",
        }
    }),
    secondary:StyleSheet.create({
        ...base_style,
        conteiner:{
            ...base_style.conteiner,
            backgroundColor:"white",
            borderColor:colors.darkgreen,
            borderWidth:1,
        },
        title:{
            ...base_style,
            color:colors.darkgreen,
        }
    })
}