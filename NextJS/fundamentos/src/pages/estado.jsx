import Layout from "../components/layout";
import { useState } from "react";
export default function Estado(){

    const state= useState(0)

    number = state[0]
    setNumber = state[1]

    return(
        <Layout titulo="Componente com Estado">
            <span></span>
            <button onClick={()=>setNumber(number + 1)}>inc</button>
            <button onClick={()=>setNumber(number - 1)}>dec</button>
        </Layout>
    )
}