import React from "react";
import { Text } from 'react-native'
import Estilo from "./Estilo";


export default () => {
    console.warm('Este é o Primeiro Componente!')
    return (
        <Text style={Estilo.txtMedio}>
            Primeiro Component
        </Text>)
}