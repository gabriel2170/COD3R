import React, {useState} from 'react'
import { View, Text, TextInput } from 'react-native'
import Estilo from './Estilo'

export default props => {
    const [nome, setNome] = useState('')
    return (
        <View>
            <Text style={Estilo.txtMedio}>{nome}</Text>
            <TextInput 
                style={Estilo.txtPequeno}
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={(e)=> setNome(e)}
            />
        </View>
    )
}
