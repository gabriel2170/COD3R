import React from 'react'
import {Button} from 'react-native'

export default props => {

    function gerarNum(min, max){
        const delta = max - min + 1
        return parseInt(Math.random() * delta) + min

    }

    return (
       <Button
        title='Executar'
        onPress={() => {
            const n = gerarNum(props.min , props.max)
            props.funcao(n)
        
        }}
       />
    )
}
