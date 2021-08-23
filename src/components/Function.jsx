import React from "react";
import PropTypes from 'prop-types'
import Button from "./Button";

const Function = ({onContentClear, onDelete}) => (
    <section className="function">
        <Button type={"button-long-text"} text={"clear"} clickHandler={onContentClear}/>
        <Button type={"button-long-text"} text={"&larr;"} clickHandler={onDelete}/>
    </section>
)

Function.proptype = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Function