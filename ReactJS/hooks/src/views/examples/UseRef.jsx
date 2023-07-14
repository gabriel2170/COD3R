import React, { useState, UseRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '.../.../components/layout/SectionTitle'

const merge = function(s1,s2){
    return [...s1].map((e,i)=>{
        return `${e}${s2[i] || ""}`
    }).join("")
}

const UseRef = (props) => {

    const [v1, setV1] = useState("")
    const [v2, setV2] = useState("")
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(()=>{
        count.current++
        myInput2.current.focus()
    },[valor1])

    useEffect(()=>{
        count.current++
        myInput1.current.focus()
    },[valor2])

    //count.current = count.current + 1

    useEffect(() => {
        count.current = count.current + 1
    }, [v1])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title='EX #01'>
                <div className="center">
                    <div>
                        <span className="text">Valor:</span>
                        <span className="text">{merge(v1, v2)}</span>
                        <span className="text red">{count.current}</span>
                    </div>
                    <input type="text" className="input"
                        ref={myInput1}
                        value={v1}
                        onChange={(e) => setV1(e.target.value)}
                    />
                </div>
            </SectionTitle>

            <SectionTitle title='EX #02'>
                <div className="center">
                    <input type="text" className="input"
                        ref={myInput2}
                        value={v2}
                        onChange={(e) => setV2(e.target.value)}
                    />
                </div>
            </SectionTitle>

        </div>
    )
}

export default UseRef
