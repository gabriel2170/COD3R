import React, { useState } from "react";
import { Text, Button } from 'react-native'
import Estilo from "./Estilo";



export default props => {

    const [numero, setNumero] = useState(props.inicial)

    const inc = () => setNumero(numero + props.passo)
    const dec = () => setNumero(numero - props.passo)

    return (
        <>
            <Text style={Estilo.txtGrande}>{numero}</Text>
            <Button title="+" onPress={inc}></Button>
            <Button title="-" onPress={dec}></Button>
        </>
    )
}
