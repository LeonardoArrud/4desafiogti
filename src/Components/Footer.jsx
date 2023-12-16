import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin  } from "react-icons/fa";
import "../Estilos/Footer.css"

function Footer (){
    return (
    
       <div className="roda">
                <div className="text">
                    <h1>FinanceGuard</h1>
                    <p>Fazendo seu dinheiro render desde 1750</p>
                </div>
            
                <div className="infos">
                    <h2>Contato</h2>
                    <h2>Termo</h2>
                    <h2>Privacidade</h2>
                </div>
            
                <div className="redes">
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaLinkedin/>
                </div>
           
                </div>
       
        
        
        )
    }

export default Footer;