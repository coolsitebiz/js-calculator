import React from 'react'

function Button(props) {
    return (
        <div className={props.btnClass}><p>{props.text}</p></div>
            
    )
}

export default Button;