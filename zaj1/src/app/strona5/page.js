'use client'

import { useState } from "react"

export default function Page() {

    const [kolor, setKolor] = useState("")
    const [input, setInput] = useState('')

    const zmien = () => {
        setKolor(input)
        setInput('')
    }

    return (
        <div className={`w-full h-screen ${kolor}`}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="kolor tła"></input>
            <button onClick={zmien}>zmien</button>
        </div>
    )
}