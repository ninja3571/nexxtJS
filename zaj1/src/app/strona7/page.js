'use client'

import Countries from "@/components/country"
import {useState, useEffect} from "react"

export default function Page(){

    const [kraje, setKraje] = useState(null)

    useEffect(()=>{
        const getData = async ()=>{
            try{
                const data = await fetch(`https://restcountries.com/v3.1/all`)
                const response = await data.json()
                setKraje(response)
                console.log(response)
            } catch(error){
                console.log(error)
            } finally{
                console.log({kraje})
            }
        }

        getData()

    }, [])


    return(
        <div>
            <h1>działa</h1>
            
            {kraje && kraje.map((item, idx)=>(
                    <Countries key={idx} kraj={item}></Countries>
                ))
            }
        </div>
    )
}