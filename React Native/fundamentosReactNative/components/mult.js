import React from "react";
import { Text } from "react-native";
import Estilo from "./Estilo";

export default function Comp() {

    console.warn('Este é o componente com varias funções separadas em modulos!')
    return <Text>Comp</Text>
}


function Comp1() {
    return <Text style={Estilo.txtGrande}>Comp #01</Text>
}


function Comp2() {
    return <Text style={Estilo.txtGrande}>Comp #02</Text>
}


export function Comp3() {
    return <Text style={Estilo.txtGrande}>Comp #03</Text>
}

 


export { Comp1, Comp2 }