import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Borders({ data }) {

    const [kraj, setKraj] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => {
        const getData = async () => {

            try {
                const resp = await fetch(`https://restcountries.com/v3.1/alpha/${data}`)
                const json = await resp.json()
                setKraj(json)
                console.log(json)
            } catch (error) {
                console.log(error)
            } finally {
                console.log(kraj)
                setLoad(false)
            }
        }

        getData()
    }, [])

    return (
        <div>{load == false &&
            // sprawdz czy jest 

            <Link href={`/strona7/${kraj.cca2}`}>
                <div className="border-black border-2 w-[140px] h-[120px] flex flex-col items-center bg-gradient-to-bl from-lime-300 to-indigo-400 pt-[5px] ">
                    <div className='w-[100px] h-[70px] relative'>
                        <Image
                            src={kraj[0].flags.png}
                            alt={kraj[0].name.common}
                            fill={true}>
                        </Image>
                    </div>
                    <h1>{kraj[0].name.common}</h1>
                    <h1>{kraj[0].capital}</h1>
                </div>
            </Link>
        }
        </div>


    )
}