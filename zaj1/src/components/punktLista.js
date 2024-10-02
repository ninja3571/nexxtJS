export default function Lista({lista}){
    // var kolor = ""
    // if(bckCol!=""){
    //     kolor="border bg-",{bckCol},"-500"
    // }

    // else{
    //     kolor="border"
    // }

    return(
        <ul>
            {
                lista.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    )
}