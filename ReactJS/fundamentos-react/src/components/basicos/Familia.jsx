import React, { cloneElement } from "react";
//import FamilhaMembro from "./FamiliaMembro";

export default (props) => {

  return (
    /*<div>
      <FamilhaMembro nome='Pedro' sobrenome={props.sobrenome}/>
      <FamilhaMembro nome='Ana' {...props}/>
      <FamilhaMembro nome='Gustavo' sobrenome='Ferreira'/>
    </div>*/

    <div>
      {
        //React.cloneElement(props.children, {...props})

        /*React.Children.map(props.children, (child) =>{
          return cloneElement(child, props)*/

        props.Children.map((child, i) => {
          return cloneElement(child, {...props, key:i})
        })
      }

    </div>
  )
}