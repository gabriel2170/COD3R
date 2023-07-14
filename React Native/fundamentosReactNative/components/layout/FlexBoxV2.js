import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV2}>
            <Quadrado cor='#abb231' />
            <Quadrado cor='#ac223a' />
            <Quadrado cor='#abb1ab' />
            <Quadrado cor='#abaa22' />
            <Quadrado cor='#abca11' />
            <Quadrado cor='#abb321' />
        </View>
    )
}


const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#000'
    },
})