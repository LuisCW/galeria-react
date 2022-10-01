import React, {useRef, useEffect} from 'react';
import img1 from './../galeria/car1.png';
import img2 from './../galeria/car2.jpg';
import img3 from './../galeria/car3.jpg';
import img4 from './../galeria/car4.jpg';
import {ReactComponent as FlechaIzquierda} from './../galeria/flechas-izquierda.svg';
import {ReactComponent as FlechaDerecha} from './../galeria/flechas-derecha.svg';
import styled from 'styled-components';


const Galeria =() =>{
  const galeria = useRef(null);
  const intervaloGaleria = useRef(null);

  const siguiente =() =>{
    if(galeria.current.children.length>0){
      const primerElemento = galeria.current.children[0];

      galeria.current.style.transition = `800ms ease-out all`;

      const tamañoImagen = galeria.current.children[0].offsetWidth;

      galeria.current.style.transform = `translateX(-${tamañoImagen}px)`;

      const transition = () =>{
        galeria.current.style.transition = 'none';
        galeria.current.style.transform = `translateX(0)`;

        galeria.current.appendChild(primerElemento);

        galeria.current.removeEventListener('transitionend',transition);
      }
      
      galeria.current.addEventListener('transitionend',transition);

    }
  }
  const anterior =() =>{
    if(galeria.current.children.length>0){
      const index = galeria.current.children.length -1;
      const ultimoElemento = galeria.current.children[index];

      galeria.current.insertBefore(ultimoElemento, galeria.current.firstChild);

      galeria.current.style.transition = 'none';
      
      const tamañoImagen = galeria.current.children[0].offsetWidth;
      galeria.current.style.transform = `translateX(-${tamañoImagen}px)`;

      setTimeout(() =>{
        galeria.current.style.transition = `800ms ease-out all`;
        galeria.current.style.transform = `translateX(0)`;
      },30);
    }
  }

  useEffect(()=> {
    intervaloGaleria.current = setInterval(()=> {
      siguiente();
    }, 10000)
  }, [])

    return(
      <ContenedorPrincipal>
        <ContenedorGaleria ref={galeria}>
          <Sgaleria>
            <a href="facebook.com">
              <img src={img1} alt=""/>
            </a>
            <TextoGaleria colorFondo='navy' colorTexto='#fff'>
              <p>Auto 1</p>
            </TextoGaleria>
          </Sgaleria>         
          <Sgaleria>
            <a href="instagram.com">
              <img src={img2} alt=""/>
            </a>
            <TextoGaleria>
              <p>Auto 2</p>
            </TextoGaleria>
          </Sgaleria>         
          <Sgaleria>
            <a href="#twitter.com">
              <img src={img3} alt=""/>
            </a>
            <TextoGaleria>
              <p>Auto 3</p>
            </TextoGaleria>
          </Sgaleria>         
          <Sgaleria>
            <a href="tiktok.com">
              <img src={img4} alt=""/>
            </a>
            <TextoGaleria>
              <p>Auto 4</p>
            </TextoGaleria>
          </Sgaleria> 
        </ContenedorGaleria>

        <Flechas>
          <Boton onClick={anterior}>
            <FlechaIzquierda />
          </Boton>
          <Boton derecho onClick={siguiente}>
            <FlechaDerecha />
          </Boton>
        </Flechas>
      </ContenedorPrincipal>
    );
  };

  const ContenedorPrincipal = styled.div`
    position: relative;
  `;
  const ContenedorGaleria = styled.div`
      display: flex;
      flex-wrap: nowrap;
  `;
  const Sgaleria = styled.div`
      min-width: 100%;
	    overflow: hidden;
	    transition: .3s ease all;
	    z-index: 10;
	    max-height: 500px;
	    position: relative;
	    img {
		    width: 100%;
		    vertical-align: top;
	    }
  `;
  const TextoGaleria = styled.div`
      background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)'};
	    color: ${props => props.colorTexto ? props.colorTexto : '#fff'};
	    width: 100%;
	    padding: 10px 60px;
	    text-align: center;
	    position: absolute;
	    bottom: 0;
	    @media screen and (max-width: 700px) {
		    position: relative;
		    background: #000;
	    }
  `;
  const Flechas = styled.div`
      padding-top: 20%;
      position: absolute;
      top: 0;
      z-index: 20;
      width: 100%;
      height: 100%;
      pointer-events: none;
  `;
  const Boton = styled.div`
      pointer-events: all;
	    background: none;
	    border: none;
	    cursor: pointer;
	    outline: none;
	    width: 50px;
	    height: 10%;
	    text-align: center;
	    position: absolute;
	    transition: .3s ease all;
      &:hover {
        background: rgba(0,0,0,.2);
        path {
          fill: #fff;
        }
      }
      path {
        fill: #cfdcc3;
      }

      ${props => props.derecho ? 'right: 0': 'left:0'}
  `;

  export {Galeria, Sgaleria, TextoGaleria};