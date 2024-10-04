import Image from "next/image";

export default function Countries({kraj}){
    return(
        <div className="">
            <div className="relative w-full h-[100px]">
                <Image
                src={kraj.flag.png}
                alt={kraj.name.common}
                />
            </div>
            <dev className='flex justify-center font-bold'>
                <h1>{kraj.name.common}</h1>
            </dev>
            <ul>
                <li>{kraj.capital}</li>
                <li>{kraj.population}</li>
            </ul>
        </div>
    )
}