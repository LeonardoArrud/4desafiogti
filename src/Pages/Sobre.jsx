import React, { useRef } from 'react'
import '../Estilos/Sobre.css';
import Detalhes from '../Components/Detalhes';
import Servicos from '../Components/Servicos'

function Sobre() {
    return(
        <>
        <section className='cabeca2'>
            <div className='texto-cont'>
            <h1>Quem somos</h1>
            <h3>Somos referência há mais de 200 anos quando o assunto é assessoria de investimentos.</h3>
            <button className='btn'>Abra sua conta</button>
            </div>
             </section>
             <section className='resto'>
             <Detalhes/>
             <Servicos/>
             </section>
             </>
    )
}
 export default Sobre