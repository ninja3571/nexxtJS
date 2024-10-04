'use client'

import { useState, useEffect } from "react"
import Countries from "@/components/country"

export default function  Page(){

    const [kraj, setKraj] = useState(null)

    useEffect( ()=>{
        const getData = async ()=>{

            try{
                const countries = await fetch("https://restcountries.com/v3.1/all")
                const response = await countries.json()
                setKraj({response})
                console.log({response})
            } catch(error){
                console.log(error)
            } finally{
                // finallySetup
            }
        }
        getData()
    }, [])


    return(
        <div>
            {kraj &&
                kraj.map((item, idx)=>{
                    <Countries key={idx} kraj={item}/>
                })
            }
        </div>
    )
}