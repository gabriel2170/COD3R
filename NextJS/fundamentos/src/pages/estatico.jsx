import Layout from "../components/layout";

export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico() {
    return (
        <Layout titulo="Conteudo Estatico">
            <div>{props.numero}</div>
        </Layout>
    )
}