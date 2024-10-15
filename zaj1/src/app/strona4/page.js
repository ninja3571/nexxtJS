'use client'

import { useState } from "react"

export default function Page() {
    // const [text, setText] = useState('')

    // const zmien = ()=>{
    //     const nowy = document.getElementById('nowyText').value
    //     setText(nowy)
    // }

    // return(
    //     <div>
    //         <h1>{text}</h1>
    //         <input type='text' id='nowyText' className="bg-indigo-600"></input>
    //         <button onClick={zmien}>zmien</button>
    //     </div>
    // )

    const [text, setText] = useState('')
    const [input, setInput] = useState('')

    const zmien = () => {
        setText(input)
        setInput('')
    }

    return (
        <div>
            <h1>{text}</h1>
            <input value={input} onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={zmien}>zmien</button>
        </div>
    )
}