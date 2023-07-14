import Layout from "../components/layout";
import { useRouter } from "next/router"; 

export default function ClienteProCodigo(){
    const router = useRouter()
    return(
        <Layout titulo='Navegação dinamica'>
            <span>Codigo = {router.query.codigo}</span>
        </Layout>
    )
}