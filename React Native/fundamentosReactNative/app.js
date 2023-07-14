import React from "react"
import { Text, View } from 'react-native'
import Primeiro from "./components/Primeiro"
import CompPadrao, { Comp1, Comp2 } from "./components/Mult"
import Titulo from "./components/Titulo"
import Aleatorio from "./components/Aleatorio"
import MinMax from './components/MinMax'
import Botao from "./components/Botao"
import Contador from "./components/Contador"
// import PaiDir from "./components/Direta/Pai"
import PaiInd from "./components/Indireta/Pai"
import ContadorV2 from "./components/Contador/contadorV2"
import Diferenciar from "./components/DiferenciarOS"
import ParouImpar from "./components/ParouImpar"
import Familia from "./components/Relacao/Familia"
import Membro from "./components/Relacao/Membro"
import UsuarioAtivo from "./components/UsuarioAtivo"
import ListaProdutosV2 from "./components/Produtos/ListaProdutosV2"
import DigiteSeuNome from "./components/DigiteSeuNome"
import Quadrado from "./components/layout/Quadrado"
import FlexBoxV1 from "./components/layout/FlexBoxV1"
import FlexBoxV2 from "./components/layout/FlexBoxV2"
import FlexBoxV3 from "./components/layout/FlexBoxV3"

export default () => {

    // Android
    //<View>
    //     <Text>{1 + 1}</Text>
    //     <CompPadrao/>
    //     <Comp1/>
    //     <Comp2/>
    //     <Primeiro />
    //     <Aleatorio min={1} max={50}/>
    //     <MinMax min={1} max={15}/>
    //     <Titulo principal="Cadastro" secundario="Tela de Cadastro"/>
    //     <Botao />
    //     <Contador inicial={100} passo={1}/>
    //     <PaiDir/>
    //     <PaiInd />
    //     <ContadorV2/>
    //     <Diferenciar/>
    // </View>


    //IOS
    <SafeAreaView>
        <Text>{1 + 1}</Text>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />
        <Aleatorio min={1} max={50} />
        <MinMax min={1} max={15} />
        <Titulo principal="Cadastro" secundario="Tela de Cadastro" />
        <Botao />
        <Contador inicial={100} passo={1} />
        <PaiDir />
        <PaiInd />
        <ContadorV2 />
        <Diferenciar />
        <ParouImpar num={4} />
        <Familia>
            <Membro nome='Maria' sobrenome='Silva' />
            <Membro nome='Lucas' sobrenome='Silva' />
        </Familia>
        <Familia>
            <Membro nome="Carol" sobrenome="Mendez" />
            <Membro nome="Beatriz" sobrenome="Mendez" />
        </Familia>
        <UsuarioAtivo usuario={{ nome: 'Leo', email: 'leopoldo@uol.com.br' }} />
        <ListaProdutosV2 />
        <DigiteSeuNome />
        <Quadrado cor='#F00'/>
        <FlexBoxV1/>
        <FlexBoxV2/>
        <FlexBoxV3/>
    </SafeAreaView>

}


