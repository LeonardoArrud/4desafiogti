import '../Estilos/Navbar.css'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";


function Navbar(){

    const [Mobile, setMobile] = useState(false);


    return(
        <nav class = 'navbar'> 
        <h1 className='logo'>FinançasGuard</h1>
         <div class="mobile-menu" onClick={() => setMobile(!Mobile)}>
            {Mobile ? <ImCross/> : <RxHamburgerMenu/>}
        </div>
        <div className={Mobile ? "nav-list-mobile" : "nav-list"} >
        <Link to="/" className='link'> <p>Home</p> </Link>
        <Link to ="/sobre" className='link'><p>Sobre nos</p></Link>
        <Link to="/contato" className='link'><p>Contanto</p></Link>
        <Link to ="/quiz" className='link'><p>Quiz</p></Link>
        </div>
        </nav> 
       
    )

}
export default Navbar