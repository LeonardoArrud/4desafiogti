
import React, { useRef } from 'react'
import '../Estilos/Main.css'
import SliderSection from '../Components/SliderSection';
import NumerosSubindo from "../Components/NumerosSubindo";
import Depoimentos from "../Components/Depoimentos";

function Main(){
    return(
        <section className='tudo'>
        <section className="cabeca">
   
        <SliderSection />
        </section>
        <section className="motivos">
        <div className="numeros">
        <h1>Nosso numeros</h1>
        <NumerosSubindo />
        </div> 
        </section>
        <section className="depoimentos">
            <h1>Depoimentos</h1>
            <Depoimentos/>
           
        </section>
        </section>
    )

}
export default Main