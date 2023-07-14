import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props=>{
    return(
        <div>
            <DiretaFilho texto='Filho 1' numero={15} bool={true}/>
            <DiretaFilho texto='Filho 2' numero={45} bool={false}/>
        </div>
    )
}


