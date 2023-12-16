import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Estilos/SliderSection.css';
import loremIpsumData from '../Dados/textos.json';

const SliderSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
      };
      const { loremIpsumTexts } = loremIpsumData;

  
    return (
      <section className="slider-section">
        <Slider {...settings}>
          <div className='sliders'>
          <div className='Texto-info direita'>
            <h1>Investimentos</h1>
            <p>{loremIpsumTexts[0].text}</p>
            </div>
            <img src={require('./Carosel/Carosel.img/imagem1.jpg')}/>
            
          </div>
          <div className='sliders'>
          <div className='Texto-info esquerdo'>
            <h1>Consultoria de Investimentos
            </h1>
            <p>{loremIpsumTexts[0].text}</p>
            </div>
          <img src={require('./Carosel/Carosel.img/imagem2.jpg')}/>
          </div>
          <div className='sliders'>
          <div className='Texto-info direita'>
            <h1>Planejamento Financeiro</h1>
            <p>{loremIpsumTexts[0].text}</p>
            </div>
          <img src={require('./Carosel/Carosel.img/imagem3.png')}/>
          </div>
        </Slider>
      </section>
    );
  };
  
  export default SliderSection;