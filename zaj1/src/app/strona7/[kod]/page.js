'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Borders from "@/components/nextTo"
import Link from "next/link"

export default function Info({params}){

    const [kraj, setKraj] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(()=>{
        async function getData(){
            try{
                const response = await fetch(`https://restcountries.com/v3.1/alpha/${params.kod}`)
                const json =await response.json()
                setKraj(json)
                console.log(json)
            } catch(error){
                console.log("ERROR")
            } finally{
                setLoad(false)
            }
        }
        getData()
    }, [])


    return(
        <div className='w-full h-3/4 flex justify-center mt-[60px]'>
            {load && <h1 className='font-bold'>Loading...</h1>}
            {kraj.length>0 && <div className='m-[10px] h-[600px] w-[520px] bg-gradient-to-tl from-orange-300 to-rose-300 p-[7px] border-2 border-black'>
                <div className='w-[400px] h-[300px] relative'>
                    <Image
                    src={kraj[0].flags.png}
                    alt={kraj[0].name.common}
                    fill={true}
                    quality={100}
                    priority></Image>
                </div>
                <div className='font-bold flex justify-center'>
                    <h1>{kraj[0].name.common}</h1>
                </div>
                    <h1>STOLICA: {kraj[0].capital}</h1>
                    <h1>SHORT: {kraj[0].cca2}</h1>
                    {/* borders */}
                    <div>
                        <h1>Borders:</h1>
                        {kraj[0] && kraj.map((items, idx)=>(
                            <Borders key={idx} kraje={items.borders}></Borders>
                            ))
                        }
                        
                    </div>
            </div>}

        </div>
    )

}