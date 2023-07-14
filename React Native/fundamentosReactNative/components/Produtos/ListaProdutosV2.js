import React from 'react'
import { FlatList, Text } from 'react-native'
import Estilo from '../Estilo'
import produtos from './produtos'

export default props => {

    const prodRender = ({item: p}) => {
        return <Text>{p.id} {p.nome} - R$ {p.preco}</Text>
    }
    return (
        <>
            <Text style={Estilo.txtGrande}>
                Lista de Produtos V2
            </Text>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={prodRender}
            />

        </>
    )
}
