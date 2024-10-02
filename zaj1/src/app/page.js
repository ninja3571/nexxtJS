// import Image from "next/image";
import ImieList from "@/components/imieList";
import Menu from "@/components/many";
import Lista from "@/components/punktLista";

export default function Home() {
  const lista = [{ossoba:"Jan Kowalski", ok:true}, {ossoba: "Imie Nazwisko", ok:true}, {ossoba: "Jan Nowak", ok:false}]
  const lista2 = [{item:"Jan Kowalski"}, {item: "Imie Nazwisko"}, {item: "Jan Nowak"}]

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
    <ImieList imie="Ktoś Tam" ok/>
    <ImieList imie='Jakub Karaban'/>

    {
      lista.map((osoba, index)=>(
        <ImieList key={index} imie={osoba.ossoba} ok={osoba.ok}/>
      ))
    }

    {/* <Lista cos="Lorem ipsum" bckCol="purple"/>   */}
    {/* <Lista lista={lista2}/> */}

    <Menu/>
    </div>
  );
}