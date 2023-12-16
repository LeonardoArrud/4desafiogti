
import '../Estilos/Formulario.css'
import { FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Formulario(){
    const el = useRef();
    const tl = useRef();



    useLayoutEffect(() => {
        const isWideScreen = window.innerWidth > 999;

        if (isWideScreen) {
        gsap.registerPlugin(ScrollTrigger);
       const ctx = gsap.context(() => {
        tl.current = gsap.timeline({
            scrollTrigger:{
                trigger: ".container",
                scrub: true,
                
                start: "top 920px",
                end: "bottom 880px"
            }
        })
        .fromTo(".title", {
            opacity: 0,
            y: -100,
        }, {
            opacity:1,
            y: 0
        })
        .fromTo(".direito1", {
            opacity: 0,
            x: -300,
        }, {
            opacity:1,
            x: 0
        })
        .fromTo(".esquerdo1", {
            opacity: 0,
            x: +200,
        }, {
            opacity:1,
            x: 0
        })
       })

        return () =>{
            gsap.killTweensOf(".sedes")
        };
    } 
    else{
        gsap.registerPlugin(ScrollTrigger);
       const ctx = gsap.context(() => {
        tl.current = gsap.timeline({
            scrollTrigger:{
                trigger: ".container",
                scrub: true,
                
                start: "top 680px",
                end: "bottom 700px"
            }
        })
        .fromTo(".title", {
            opacity: 0,
            y: -100,
        }, {
            opacity:1,
            y: 0
        })
        .fromTo(".direito1", {
            opacity: 0,
            x: -300,
        }, {
            opacity:1,
            x: 0
        })
        .fromTo(".esquerdo1", {
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
    }

    }, [])

  return (
    <div className="container">
      <h1 className="title">Canais de atendimento</h1>
      <div className='redes3'>
      <div className='wpp direito1'>
        <div className='texts'>
            <FaWhatsapp/>
            <h1>WhatsApp</h1>
            <h2>+55 11 4966-2890</h2>
            <p>Converse conosco pelo WhatsApp.</p>
            <p>É só apontar a câmera do seu celular para o QR code ao lado.</p>
        </div>
        <div className='qr'></div>
      </div>
      <div className='wpp esquerdo1'>
        <div className='texts'>
            <MdEmail/>
            <h1>E-mail</h1>
            <h2>Envio de formulário</h2>
            <p>Envie suas dúvidas, críticas ou sugestões.</p>

        </div>
      </div>
      </div>

      

    </div>
  );
    };


export default Formulario