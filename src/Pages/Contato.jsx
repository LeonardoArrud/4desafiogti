
import React, { useRef } from 'react'
import '../Estilos/Contato.css'
import Sedes from "../Components/Sedes";
import Formulario from "../Components/Formulario";
function Contato(){
    const minhaSectionRef = useRef();
    const scrollToSection = () => {
        minhaSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      };
    return(
        <>
        <section className="cabeca">
            <div className='texto-cont'>
            <h1 id='tit'>Quer resultados jamais vistos?</h1>
            <h2>Ficaremos feliz em ajudar!</h2>
            <button className='btn' onClick={scrollToSection}>Entrar em contato</button>
            </div>
        </section>
        <Sedes/>
        <section className='formulario' ref={minhaSectionRef}>
            <Formulario/>

        </section>
        </>
    )

}
export default Contato