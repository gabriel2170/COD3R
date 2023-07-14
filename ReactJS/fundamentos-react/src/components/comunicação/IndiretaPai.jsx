import React from "react";
import IndiretaFIlho from "./IndiretaFIlho";


export default props => {

    function fornecerInfo(nome, idade, nerd){
        console.log(nome, idade, nerd)
    }
    return (
        <div>
            <div>
                Pai
            </div>

            <IndiretaFIlho clicar={fornecerInfo}/>
        </div>
    )
}