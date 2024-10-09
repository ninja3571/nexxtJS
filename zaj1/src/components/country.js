import Image from "next/image"

export default function Countries({kraj}){
    return(
        <div className="bg-indigo-500 w-[200px] h-[200px] border p-[3px]">
            <div className='relative w-[190px] h-[100px]'>

                <Image
                    src={kraj.flags.png}
                    alt={kraj.name.common}
                    fill={true}
                    // layout='fill'
                    objectfit='container'>
                </Image>
            </div>

            <div className="flex font-bold justify-center">
                <h1>{kraj.name.common}</h1>
            </div>
            
            <ul>
                <li>{kraj.capital}</li>
                <li>{kraj.population}</li>
            </ul>
        </div>
    )
}