import React from "react";


export default props => {

    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    const {min, max} = props

    return (
        <div>
            <h2>Valor Aleatorio</h2>
            <p><strong>Valor Minimo: </strong> {props.min}</p>
            <p><strong>Valor Máximo: </strong> {props.max}</p>
            <p><strong>Valor Escolhido: </strong> {aleatorio}</p>
        </div>
    )
}