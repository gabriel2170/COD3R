import React from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'
import If from './If'

export default ({ usuario = {} }) => {
    return (
        <If teste={usuario.nome && usuario.email}>
            <Text style={Estilo.txtMedio}>
                Usuario Logado: 
            </Text>
            <Text style={Estilo.txtMedio}>
                {usuario.nome}  - {usuario.email}
            </Text>
        </If>
    )
}
