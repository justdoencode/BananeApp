import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export default StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:colors.darkgreen,
        margin:5,
        borderRadius:20,
        padding:10,
    },
    inner_conteiner:{
        margin:5,
        justifyContent:"space-between",
        flexDirection:"row",
    },
    user:{
        color:"white",
    },
    date:{
        color:"white",
    },
    title:{
        margin:5,
        color:"white",
    },
    button_conteiner:{
        justifyContent:"flex-end",
        flexDirection:"row",
        alignItems:"center",
    }
})