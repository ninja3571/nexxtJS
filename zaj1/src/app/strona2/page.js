'use client'

import { useState } from "react"

export default function Home(){

    const [licz, setLicz] = useState('start')

    const zmien = ()=>{
        setLicz(licz == 'start'? "stop" : "start")

    }
    return(
        <>
            <h1>{licz}</h1>
            <button onClick={zmien}>zmien</button>
        </>
    )
}