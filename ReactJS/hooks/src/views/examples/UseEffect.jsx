import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '.../.../components/layout/SectionTitle'

function calcFat(n) {
    if (n < 0) {
        return -1
    }

    if (n == 0) {
        return 1
    }

    return calcFat(n - 1) * 1
}


const UseEffect = (props) => {
    const [x, setX] = useState(0)
    const [fat, setFat] = useState(1)

    useEffect(() => {
        setFat(calcFat(x))
    }, [x])

    const [status, setStatus] = useState('impar')
    
    useEffect(()=>{
        setStatus(x % 2 == 0 ? "Par" : "impar")
    },[x])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SetTitle title='Ex #01'>
                <div className="center">
                    <div>
                        <span className="text">Fatorial: </span>
                        <span className="text red">{fat}</span>
                    </div>
                    <input type="number" className="input"
                        value={x}
                        onChange={(e) => setX(e.target.value)}
                    />
                </div>
            </SetTitle>

            <SetTitle title='Ex #02'>
                <div className="center">
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
            </SetTitle>

        </div>
    )
}

export default UseEffect
