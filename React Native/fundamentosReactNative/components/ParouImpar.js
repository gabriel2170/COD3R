import React from 'react'
import { Text, View } from 'react-native'
import Estilo from './Estilo'

export default props => {

    num = props.num ? props.num : 0

    if (num % 2 == 0) {
        return (
            <View>
                <Text style={Estilo.txtMedio}>O Resultado é</Text>
                <Text style={Estilo.txtMedio}>PAR</Text>
            </View>
        )
    } else {
        return (
            <View>
                <Text style={Estilo.txtMedio}>O Resultado é</Text>
                <Text style={Estilo.txtMedio}>Impar</Text>
            </View>
        )
    }

}

