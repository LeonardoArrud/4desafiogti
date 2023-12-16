import { useLayoutEffect, useRef } from "react";
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../Estilos/Detalhes.css';
import dados from '../Dados/Detalhes.json';

function Detalhes(){
    const el = useRef();
    const tl = useRef();



    useLayoutEffect(() => {
        const isWideScreen = window.innerWidth > 999;

        if (isWideScreen) {
        gsap.registerPlugin(ScrollTrigger);
       const ctx = gsap.context(() => {
        tl.current = gsap.timeline({
            scrollTrigger:{
                trigger: ".sobren",
                scrub: true,
                start: "top 800px",
                end: "bottom 760px"
            }
        })
        .fromTo("#titulo", {
            opacity: 0,
            y: -100,
        }, {
            opacity:1,
            y: 0
        })
        .fromTo(".hist", {
            opacity: 0,
            y: -300,
        }, {
            opacity:1,
            y: 0
        })
        .fromTo("#cafe", {
            opacity: 0,
            x: +200,
        }, {
            opacity:1,
            x: 0
        }) .fromTo("#reuni", {
            opacity: 0,
            x: -300,
        }, {
            opacity:1,
            x: 0
        })
       })

        return () =>{
            gsap.killTweensOf(".sobren")
        };
    }
    else{
        gsap.registerPlugin(ScrollTrigger);
       const ctx = gsap.context(() => {
        tl.current = gsap.timeline({
            scrollTrigger:{
                trigger: ".deta",
                scrub: true,
                
                start: "top 600px",
                end: "bottom 760px"
            }
        })
        .fromTo(".hist", {
            opacity: 0,
            x: -300,
        }, {
            opacity:1,
            x: 0
        })
        .fromTo("#cafe", {
            opacity: 0,
            x: +200,
        }, {
            opacity:1,
            x: 0
        }) .fromTo("#reuni", {
            opacity: 0,
            x: -300,
        }, {
            opacity:1,
            x: 0
        })
       })

        return () =>{
            gsap.killTweensOf(".sobren")
        };
    }

    }, [])
    
    
    return (
        <section className="sobren">
            <h1 id="titulo">Um pouco sobre nos</h1>
            <div className="deta" >
        {
            dados.map( (dados,i) => {
                return(
                     dados.id === "hist" ? (
                        <section className="hist">
                    <div className="sobb" key={i} id={dados.id}>
                        <div className="textos">
                        <h1>{dados.titulo}</h1>
                        <p className="bra">{dados.texto}</p>
                        </div>
                    </div>
                    </section>
                    ) :(
                        <div className="boas" key={i} id={dados.id}>
                        <div className="pe" id={dados.id}>
                        <img src = {dados.imagem}/>
                        </div>
                        <div className="textos" >
                        <h1>{dados.titulo}</h1>
                        <p>{dados.texto}</p>
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
export default Detalhes