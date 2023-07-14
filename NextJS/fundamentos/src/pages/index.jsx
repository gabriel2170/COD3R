import Navegador from "../components/navegador"

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap: 'wrap'
        }}>  
            <Navegador destino='/estiloso' texto="Estiloso" />
            <Navegador destino='/exemplo' texto="Exemplo" cor="darkviolet"/>
            <Navegador destino='/jsx' texto="JSX" cor="crimson"/>
            <Navegador destino='/navegacao' texto="Navegacao simples" cor='green'/>
            <Navegador destino='/cliente/325' texto="Navegacao dinamica" cor='blue'/>
            <Navegador destino='/estado' texto="Componente com Estado" cor='yellow'/>
            <Navegador destino='/estatico' texto="Conteudo Estatico" cor='yellow'/>
        </div>
    )
}