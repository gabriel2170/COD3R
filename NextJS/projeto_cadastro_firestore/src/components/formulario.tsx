import Cliente from "@/core/Cliente";
import Entrada from "./entrada";
import { useState } from "react";
import Botao from "./botao";

interface FormularioProps {
    cliente: Cliente
    cancelado?: () => void
    clienteMudou?: (cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente.nome ?? '')
    const [idade, setIdade] = useState(props.cliente.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada somenteLeitura texto="Codigo" valor={id} className="mb-2"/>
            ) : false}

            <Entrada texto="Nome" valor={nome} valorMudou={setNome} className="mb-2"/>
            <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade} className={""} />

            <div className="flex justify-end mt-3">
                <Botao cor='blue' className='mr-2' onClick={()=> props.clienteMudou?.(new Cliente(nome, idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}