import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../styles/colors";

const deviceSize=Dimensions.get("window");
export default StyleSheet.create({
    conteiner:{
        backgroundColor:"white",
        padding:20,
        margin:10,
        borderRadius:10,
        height:deviceSize.height /3,
    },
    input_conteiner:{
        flex:1,
    },
    modal:{
    }
})