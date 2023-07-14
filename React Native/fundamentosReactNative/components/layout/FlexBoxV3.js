import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado cor='#abb231' lado={60}/>
            <Quadrado cor='#ac223a' lado={50}/>
            <Quadrado cor='#abb1ab' lado={40}/>
            <Quadrado cor='#abaa22' lado={30}/>
            <Quadrado cor='#abca11' lado={20}/>
            <Quadrado cor='#abb321' lado={10}/>
        </View>
    )
}


const style = StyleSheet.create({
    FlexV3: {
        flexDirection: "row-reverse",
        justifyContent: "flex-end",
        alignItems: "baseline",
        height: 250,
        width: '100%',
        backgroundColor: '#000'
    },
})