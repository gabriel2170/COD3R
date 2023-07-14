import React from "react";
import './Card.css'


export default (props) =>{

    const cardStyle = {
        backgroundColor: props.color || '#f00',
        borderColor: ''
    }
    return(
        <div className='Card' style={cardStyle}>
            <div className="Content">{props.titulo}</div>
            <div className="Title">
                {props.children}
            </div>
        </div>
    )
};