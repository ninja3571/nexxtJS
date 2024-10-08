import Image from "next/image"

export default function Countries(kraj){
    return(
        <div className="bg-indigo-500 w-[200px] h-[150px]">
            <Image
            src={kraj.flags.png}
            alt={kraj.name.common}>
            </Image>

            <div className="fles font-bold justify-center">
                <h1>{kraj.name.common}</h1>
            </div>
            
            <ul>
                <li>{kraj.capital}</li>
                <li>{kraj.population}</li>
            </ul>
        </div>
    )
}