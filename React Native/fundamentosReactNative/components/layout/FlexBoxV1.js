import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV1}>
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
    FlexV1:{
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: '#000'
    },
})