'use client'

import { useState } from "react"

export default function Page(){

    const [items, setItems] = useState([])
    const [input, setInput] = useState('')

    const zmien = ()=>{
        setItems([...items, input])
        setInput('')
        console.log(...items)
    }

    return(
        <div>
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="lista"></input>
            <button onClick={zmien}>DODAJ</button>
            <ul>
                <li>{items}</li>
                {
                    items.map((item, idx)=>(
                        <li key={idx}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}