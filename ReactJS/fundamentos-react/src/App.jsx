import React from "react"
import Fragmento from './components/basicos/Fragmento'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import Familia from "./components/basicos/Familia"
import ListaAlunos from "./components/Repeticao/ListaAlunos"
import ParOuImpar from "./components/Condicional/ParOuImpar"
import UsuarioInfo from "./components/Condicional/UsuarioInfo"
import DiretaPai from "./components/comunicação/DiretaPai"
import IndiretaPai from "./components/comunicação/IndiretaPai"
import Input from "./components/formulario/Input"
import './App.css'

export default (props) => {
    return (
        <div id='app'>
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo='Componente com Filhos' color='00c8f8'>
                    <Familia sobrenome='Ferreira'>
                        <FamiliaMembro nome='Ana' />
                        <FamiliaMembro nome='Gustavo' />
                        <FamiliaMembro nome='Pedro' />
                    </Familia>
                </Card>
                <Card titulo='Desafio Aleatorio' color='#e94c6f'>
                    <Aleatorio min={10} max={60} />
                </Card>

                <Card titulo='Primeiro Componente' color='#e8b71a'>
                    <Primeiro />
                </Card>

                <Card titulo='Com parametro' color='#588c73'>
                    <ComParametro titulo="Segundo Componente" aluno='Gabriel' nota={6.5} />
                    <ComParametro titulo="Segundo Componente" aluno='Maria' nota={8.0} />
                </Card>

                <Card titulo='Fragmento' color='#588a93'>
                    <Fragmento />
                </Card>

                <Card titulo="Repeticao" color="#00a2d3">
                    <ListaAlunos/>
                </Card>

                <Card titulo="Renderizacao Condicional" color="#00a4d8">
                    <ParOuImpar/>
                    <UsuarioInfo usuario={{nome: 'Otavio'}}/>
                </Card>
                <Card titulo="Comunicacao Direta" color="#00a4d8">
                    <DiretaPai/>
                </Card>
                <Card titulo="Comunicacao Indreta" color="#00a4d8">
                    <IndiretaPai/>
                </Card>
                
                <Card titulo="Componente Controlado" color="#00a4d8">
                    <Input/>
                </Card>


            </div>

        </div>

    );
}