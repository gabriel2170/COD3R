import React from "react";

export default props => {

    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={(e)=>{props.clicar('Paulo', 12, true)}}>Fornecer Informações</button>
        </div>
    )
}