import React from "react";
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({type, text, clickHandler}) => {
    return (
        <button className={type} onClick={() => {
            console.log("onClick en el button")
            clickHandler(text)
        }}>
            <span>
                {
                    text
                }
            </span>
        </button>
    )
}

Button.prototype = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Button