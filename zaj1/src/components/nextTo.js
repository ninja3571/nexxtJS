import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Borders({kraje}){
    
    const [countr, setCountr] = useState([])
    const licz = kraje.length-1
    console.log(kraje)

    if(kraje!=null && kraje!=""){
        useEffect(()=>{
            const getData = async ()=>{
                 
                for(var i=0; i<=licz; i++){
                        try{  
                        const resp = await fetch(`https://restcountries.com/v3.1/alpha/${kraje[i]}`)
                        const json = await resp.json()
                        // console.log(json)
                        setCountr(json)
                        console.log(json)
                        console.log(i)
        
                        } catch(error){
                            console.log(error)
                        
                        } finally{
                        }
                    }
                }

            getData()    
        }, [])
    }

    return(
        <Link href={`/strona7`}>
            <div className="border-black border-2 w-[140px] h-[120px] flex flex-col items-center bg-gradient-to-bl from-lime-300 to-indigo-400 pt-[5px] ">
                <div className='w-[100px] h-[70px] relative'>
                    {/* <Image
                    src={countr.flags.png}
                    alt={countr.name.common}
                    fill={true}></Image> */}
                </div>
                <h1>Nazwa</h1>
                <h3>stolica</h3>
            </div>
        </Link>
    )
}