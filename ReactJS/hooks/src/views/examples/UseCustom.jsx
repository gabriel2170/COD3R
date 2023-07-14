import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useConter } from '../../components/hooks/useConter'
import { useFetch } from '../../components/hooks/useFetch'

const UseRef = (props) => {

    const [count, inc, dec] = useConter()   
    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetch(url)

    function showStates(states){
        return states.map(state => <li>{state.name} = {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title='Ex #01'>
                <div className="center">
                    <span className="text">{count}</span>
                </div>

                <div>
                    <button className="btn" onClick={()=> dec()}>
                        -1
                    </button>
                    <button className="btn" onClick={()=> inc()}>
                        +1
                    </button>
                </div>
            </SectionTitle>

            <SectionTitle title='Ex #02'>
                <div className="center">
                    <ul>
                        {response.data ? showStates(response.data) : false}
                    </ul>
                </div>
            </SectionTitle>

        </div>


    )
}

export default UseRef
