import React from "react";
import PropTypes from 'prop-types'
import Button from "./Button";

const MathOperation = ({onclickOperation, onclickEqual}) => (
    <section className="math-operation">
        <Button text={"+"} clickHandler={onclickOperation}/>
        <Button text={"-"} clickHandler={onclickOperation}/>
        <Button text={"*"} clickHandler={onclickOperation}/>
        <Button text={"/"} clickHandler={onclickOperation}/>
        <Button text={"="} clickHandler={onclickEqual}/>
    </section>
)

MathOperation.prototype = {
    onclickOperation: PropTypes.func.isRequired,
    onclickEqual: PropTypes.func.isRequired
}

export default MathOperation