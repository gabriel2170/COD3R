import React from "react";
import { Button } from "react-native";


export default props => {

    function executar() {
        console.warn('Botao Clicado!!')
    }

    return (
        <>
            <Button
                title="Executar #01!"
                onPress={executar}
            />
            <Button
                title="Executar #02!"
                onPress={function(){
                    console.warn('Segundo Botao Clicado!!')
                }}
            />
            <Button
                title="Executar #03!"
                onPress={()=>{console.warn('Terceiro Botao Clicado!!')}}
            />

        </>

    )
}