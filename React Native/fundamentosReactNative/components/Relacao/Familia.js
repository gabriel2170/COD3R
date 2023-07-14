import React from 'react'
import Membro from './Membro'

export default props => {
    return (
       <>
            {/* <Membro nome="Carol" sobrenome="Mendez"/>
            <Membro nome="Beatriz" sobrenome="Mendez"/> */}

            {props.children}
       </>
    )
}
