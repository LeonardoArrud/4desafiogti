import { useLayoutEffect, useRef } from "react";
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../Estilos/Servicos.css';
import dados from '../Dados/Servicos.json';
import { VscGraph } from "react-icons/vsc";
import { IoMdPeople } from "react-icons/io";
import { FaEarthAfrica } from "react-icons/fa6";
import { TbPigMoney } from "react-icons/tb";


function Servicos(){
    const el = useRef();
    const tl = useRef();



    useLayoutEffect(() => {const isWideScreen = window.innerWidth > 999;

        if (isWideScreen) {
        gsap.registerPlugin(ScrollTrigger);
       const ctx = gsap.context(() => {
        tl.current = gsap.timeline({
            scrollTrigger:{
                trigger: ".serv",
                scrub: true,
                start: "top 800px",
                end: "bottom 880px"
            }
        })
        .fromTo("#titulo2", {
            opacity: 0,
            y: -100,
        }, {
            opacity:1,
            y: 0
        })
        .fromTo("#ana", {
            opacity: 0,
            y: +300,
        }, {
            opacity:1,
            y: 0
        })
        .fromTo("#col", {
            opacity: 0,
            y: +200,
        }, {
            opacity:1,
            y: 0
        }) .fromTo("#colr", {
            opacity: 0,
            y: +100,
        }, {
            opacity:1,
            y: 0
        })
        .fromTo("#inv", {
            opacity: 0,
            y: +50,
        }, {
            opacity:1,
            y: 0
        })
       })

        return () =>{
            gsap.killTweensOf(".serv")
        };
    } else{
        gsap.registerPlugin(ScrollTrigger);
       const ctx = gsap.context(() => {
        tl.current = gsap.timeline({
            scrollTrigger:{
                trigger: ".serv",
                scrub: true,
                start: "top 800px",
                end: "bottom 810px"
            }
        })
        .fromTo("#titulo2", {
            opacity: 0,
            y: -100,
        }, {
            opacity:1,
            y: 0
        })
        .fromTo("#ana", {
            opacity: 0,
            y: +300,
        }, {
            opacity:1,
            y: 0
        })
        .fromTo("#col", {
            opacity: 0,
            y: +200,
        }, {
            opacity:1,
            y: 0
        }) .fromTo("#colr", {
            opacity: 0,
            y: +100,
        }, {
            opacity:1,
            y: 0
        })
        .fromTo("#inv", {
            opacity: 0,
            y: +50,
        }, {
            opacity:1,
            y: 0
        })
       })

        return () =>{
            gsap.killTweensOf(".serv")
        }
    }

    }, [])
    const renderIcon = (dadosId) => {
        switch (dadosId) {
            case 1:
                return <VscGraph />;
            case 2:
                return <IoMdPeople />;
            case 3:
                return <FaEarthAfrica/>;
            case 4:
                return <TbPigMoney />;
        }
    };

    return(
        <section className="serv">
            <h1 id="titulo2">Nossos Servicos</h1>
            <div className="servicos" >
        {
            dados.map( (dados,i) => {
                return(
                    <div className="servico" key={i} id={dados.index}>
                       {renderIcon(dados.id)}
                        <div className="textos-se">
                        <h1>{dados.titulo}</h1>
                        <p>{dados.texto}</p>
                        </div>
                    </div>
                   
                )
            })
        }
        </div>
        </section>

    )
}

export default Servicos
