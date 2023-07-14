import React, { Fragment } from "react";
import { View, Text } from 'react-native'
import Estilo from "./Estilo";


export default props => {
    return (
        <View>
            <Fragment>
                <Text style={Estilo.txtGrande}>{props.principal}</Text>
                <Text style={Estilo.txtMedio}>{props.secundario}</Text>
            </Fragment>
        </View>
    )
}

