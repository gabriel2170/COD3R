import React from "react"


export default function ComParametro(props) {
    let status = props.nota >= 7.0 ? 'Aprovado' : "Recuperacao"

    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno} </strong>
                tem nota
                <strong>{props.nota}</strong>
                e ele foi
                <strong>{status}</strong>
            </p>

        </div>
    )

}