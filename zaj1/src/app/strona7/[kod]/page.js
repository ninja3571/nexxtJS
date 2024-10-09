'use client'

import { useState, useEffect } from "react"
import Image from "next/image"

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
            {kraj.length>0 && <div className='m-[10px] h-[400px] w-[320px] bg-gradient-to-tl from-orange-300 to-rose-300 p-[7px] border-2 border-black'>
                <div className='w-[300px] h-[200px] relative'>
                    <Image
                    src={kraj[0].flags.png}
                    alt={kraj[0].name.common}
                    fill={true}
                    quality={100}></Image>
                </div>
                <div className='font-bold flex justify-center'>
                    <h1>{kraj[0].name.common}</h1>
                </div>
                    <h1>{kraj[0].capital}</h1>
            </div>}

        </div>
    )

}