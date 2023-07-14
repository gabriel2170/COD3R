import Layout from '../components/layout'
import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'

export default function Estiloso() {
    return (

        <Layout>
            <div className={styles.green}>
                <Link href='/'>Voltar</Link>
                <h1>Estilo usando CSS Modularizado</h1>
            </div>
        </Layout>
    )

}