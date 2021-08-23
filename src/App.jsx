import React, {useState} from "react"
import words from 'lodash.words'
import Result from "./components/Result";
import MathOperation from "./components/MathOperation";
import Function from "./components/Function";
import Numbers from "./components/Numbers";
import './App.css'

/* eslint no-eval:0 */

const App = () => {
    const [stack, setStack] = useState("")

    const items = words(stack, /[^-^+^*^]+/g)
    const value = items.length > 0 ? items[items.length-1] : "0"

    console.log("Renderizando la app", items)
    return (
        <main className='react-calculator'>
            <Result value={value}/>
            <Numbers onClickNumber={
                number => {
                    console.log("Click en number ", number)
                    setStack(`${stack} ${number}`)
                }} />
            <Function
                onContentClear={() => {
                    console.log("Content clear")
                    setStack('')
                }}
                onDelete={() => {
                    if (stack.length > 0) {
                        const newStack = stack.substring(0, stack.length -1)
                        console.log("onDelete", newStack)
                        setStack(newStack)
                    }
                }}/>
            <MathOperation
                onclickOperation={operation => {
                    console.log("Operacion: ", operation)
                    setStack(`${stack}${operation}`)
                }}
                onclickEqual={equal => {
                    console.log("Operation: ", equal)
                    setStack(eval(stack.toString()))
                }}>
            </MathOperation>
        </main>
    )
}

export default App