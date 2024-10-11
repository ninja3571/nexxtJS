import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Borders({ data }) {

    const [kraj, setKraj] = useState([])

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
            }
        }

        getData()
    }, [])

    return (
        <div>{kraj &&
            // sprawdz czy jest 

            <Link href={`/strona7/${kraj.cca2}`}>
                <div className="border-black border-2 w-[140px] h-[120px] flex flex-col items-center bg-gradient-to-bl from-lime-300 to-indigo-400 pt-[5px] ">
                    <div className='w-[100px] h-[70px] relative'>
                        {/* <Image
                        src={kraj.flags.png}
                        alt={kraj.name.common}
                        fill={true}>
                        </Image> */}
                    </div>
                    {/* <h1>{kraj.name.common}</h1> */}
                    <h1>{kraj.capital}</h1>
                </div>
            </Link>
        }
        </div>


    )
}