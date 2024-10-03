'use client'

import Menu from "@/components/many";
import { useState } from "react";

export default function Page(){
    
    const [licznik, setLicznik] = useState(0)
    
    const handleClick = ()=>{
        setLicznik(licznik + 1)
    }


    return(
    <div>
        <h1>{licznik}</h1>
        <button onClick={handleClick}>+1</button>
    </div>
    )
}