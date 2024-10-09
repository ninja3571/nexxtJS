'use client'

import Countries from "@/components/country"
import {useState, useEffect} from "react"
import Link from "next/link"

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
        <div className='w-full h-screen flex flex-row flex-wrap'>
            
            {kraje && kraje.map((item, idx)=>(
                <Link key={idx} href={`/strona7/${item.cca2}`}>
                    <Countries kraj={item}></Countries>
                </Link>
                ))
            }
        </div>
    )
}