import React , {useState} from "react";
import './Input.css'

export default props => {

    const [valor, setValor] = useState('Inicial')
    return(
        <div className="Input">
            <input value={valor} />
        </div>
    )
}