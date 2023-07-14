import Cabecalho from "../components/cabecalho";

export default function Exemplo() {
    return (
        <>
            <Cabecalho name='Joao' age={34} aPerson={true}/>
            <Cabecalho name='xxyzad' age={0} aPerson={false}/>
        </>
    )
}
