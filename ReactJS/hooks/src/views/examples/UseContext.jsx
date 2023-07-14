import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/dataContext'
import SectionTitle from '../../components/layout/SectionTitle'
import { AppContext } from '../../data/store'

const UseContext = (props) => {

    const context = useContext(DataContext)

    function addNumber(delta) {
        context.setState({
            ...context.state,
            number: context.state.number + delta
        })
    }


    const [number, text, setNumber] = useContext(AppContext)

    useEffect(() => {
        if (number > 1250) {
            setText('Erro!!')
        }
    }, [])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title='EX #01'>
                <div className="center">
                    <span className="text">{context.text}</span>
                    <span className="text">{context.number}</span>

                </div>

                <div>
                    <button className="btn" onClick={() => addNumber(-1)}>-1</button>
                    <button className="btn" onClick={() => addNumber(+1)}>+1</button>
                </div>
            </SectionTitle>

            <SectionTitle title='EX #02'>
                <div className="center">
                    <span className="text">{text}</span>
                    <span className="text">{number}</span>
                    <span className="text">
                        <div>
                            <button className="btn"
                                onClick={() => setNumber(number - 1)}
                            >-1</button>
                            <button className="btn"
                                onClick={() => setNumber(number + 1)}
                            >+1</button>
                        </div>
                    </span>
                </div>
            </SectionTitle>
        </div>
    )
}

export default UseContext
