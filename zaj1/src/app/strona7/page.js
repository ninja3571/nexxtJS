'use client'

import Countries from "@/components/country"
import {useState, useEffect} from "react"

export default function Page(){

    const [kraje, setKraje] = useState(null)

    useEffect(()=>{
        const getData = async ()=>{
            try{
                const response = await fetch(`https://restcountries.com/v3.1/all`)
                const jsonn = await response.json()
                setKraje(jsonn)
                console.log(jsonn)
            } catch(error){
                console.log(error)
            } finally{
                // finally
            }
        }

        getData()

    }, [])


    return(
        <div>
            <h1>działa</h1>

            {kraje &&
                kraje.map((item, index)=>{
                    <Countries key={index} kraj={item}></Countries>
                })
            }
        </div>
    )
}