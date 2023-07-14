import React from "react";

const initialState = {
    number: 3421,
    text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState)

const Store = (props) => {
    const [state, setState] = useState(initialState)

    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }
    return (
        <AppContext.provider value={{
            number:state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: n => updateState('text', n),
        }}>
            {props.children}
        </AppContext.provider>

    )
}


export default Store