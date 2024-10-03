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
              lista.map((osoba, index)=>(
                <li key={index}>{osoba.item}</li>
              ))
            }
        </ul>
    )
}