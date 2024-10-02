export default function ImieList({imie, ok}){
    var clasnamE =""
    if(ok){
        clasnamE = "border w-[200px] text-center bg-green-500"
    }

    else{
        clasnamE = "border w-[200px] text-center"
    }

    return(
        <div className={clasnamE}>
            <p>{imie}</p>
        </div> 
    )
}
