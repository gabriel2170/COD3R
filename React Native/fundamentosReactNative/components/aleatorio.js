import React from "react";
import { Text } from "react-native";
import Estilo from "./Estilo";


export default props =>{
    const {min, max} = props
    const delta = min - max + 1
    const aleatorio = parseInt(Math.random() * delta) + min

    return(
        <Text style={Estilo.txtGrande}>
            O valor aleatorio é {aleatorio}
        </Text>
    )
}