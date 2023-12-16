
import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import '../Estilos/NumerosSubindo.css';

const NumerosSubindo = () => {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [valor3, setValor3] = useState(0);

  const valoresFinais = [100, 1000, 100]; 
  const velocidade = 1;
  
  const handleVisibilityChange = isVisible => {
    if (isVisible) {
      const interval1 = setInterval(() => {
        setValor1(prev => (prev < valoresFinais[0] ? prev + velocidade : prev));
      }, 30); 

      const interval2 = setInterval(() => {
        setValor2(prev => (prev < valoresFinais[1] ? prev + velocidade : prev));
      }, 10);

      const interval3 = setInterval(() => {
        setValor3(prev => (prev < valoresFinais[2] ? prev + velocidade : prev));
      }, 30); 

      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
      };
    }
  };

  return (
    <VisibilitySensor onChange={handleVisibilityChange}  partialVisibility>
      <div className="numeros-subindo">
        <div className='valores'>
          <h1>Valor investido</h1>
        <div className="numero">{valor1} <h2 className='bilhoes'>Bilhoes</h2></div>
        <p>dolares que investimos</p>
        </div>
        <div className='valores'>
          <h1>Clientes</h1>
        <div className="numero">{valor2}</div>
        <p>pelo mundo todo</p>
        </div>
        <div className='valores'>
          <h1>Atuacao</h1>
        <div className="numero">{valor3}</div>
        <p>paises que atuamos</p>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default NumerosSubindo;
