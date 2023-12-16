import { useLayoutEffect, useRef } from "react";
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../Estilos/Sedes.css';
import dados from '../Dados/Sedes.json';

function Sedes(){
    const el = useRef();
    const tl = useRef();



    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
       const ctx = gsap.context(() => {
        tl.current = gsap.timeline({
            scrollTrigger:{
                trigger: ".enderes",
                scrub: true,
                
                start: "top 800px",
                end: "bottom 920px"
            }
        })
        .fromTo("#titulo", {
            opacity: 0,
            y: -100,
        }, {
            opacity:1,
            y: 0
        })
        .fromTo(".direito", {
            opacity: 0,
            x: -300,
        }, {
            opacity:1,
            x: 0
        })
        .fromTo(".esquerdo", {
            opacity: 0,
            x: +200,
        }, {
            opacity:1,
            x: 0
        })
       })

        return () =>{
            gsap.killTweensOf(".sedes")
        }

    }, [])
    
    return(
        <section className="sedes">
            <h1 id="titulo">Nossas Sedes</h1>
            <div className="enderes" >
        {
            dados.map( (dados,i) => {
                return(
                     i % 2 === 0 ? (
                    <div className="cliente direito" key={i} id={dados.id}>
                        <div className="sede">
                        <img src = {dados.imagem}/>
                        </div>
                        <div className="textos">
                        <h1>{dados.nome}</h1>
                        <p>{dados.endereco}</p>
                        </div>
                    </div>
                    ) :(
                        <div className="cliente esquerdo" key={i} id={dados.id}>
                        <div className="sede">
                        <img src = {dados.imagem}/>
                        </div>
                        <div className="textos">
                        <h1>{dados.nome}</h1>
                        <p>{dados.endereco}</p>
                        </div>
                    </div>
                    )
                )
            })
        }
        </div>
        </section>

    )
}

export default Sedes
