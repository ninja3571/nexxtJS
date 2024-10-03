'use client'

import { useState } from "react";

export default function Page(){

    const [kolor, setKolor] = useState('bg-lime-400')

    const zmien = ()=>{
        setKolor(kolor=='bg-lime-400' ? 'bg-purple-500' : 'bg-lime-400')
    }

    return(
        <div className={`h-screen ${kolor}`}>
            <button onClick={zmien}>Inne tło</button>
        </div>
    )
}