import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store'



const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span>
                    :
                    <span className="text">Sem Usuario</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="bnt" onClick={() => dispatch({ type: 'login', name: 'Jonas' })}>Login</button>
                    <button className="bnt" onClick={() => dispatch({ type: 'add2' })}>+2</button>
                    <button className="bnt" onClick={() => dispatch({ type: 'mult7' })}>*7</button>
                    <button className="bnt" onClick={() => dispatch({ type: 'div25' })}>/25</button>
                    <button className="bnt" onClick={() => dispatch({ type: 'int' })}>Int</button>
                    <button className="bnt" onClick={() => dispatch({ type: 'Addx' })}>Addx</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
