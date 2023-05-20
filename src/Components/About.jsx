import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'
import Image from './img/About.png'

function About() {
  document.title = 'Deport-Style - About'
  return (
    <>
      <section id="About">
        <div id="Container">
          <div id="AboutContentWrapper">
            <div id="AboutDesc">
              <h2>Un poco de quienes somos.</h2>
              <p>
                Somos un equipo de atletas argentinos que amamos el deporte acuatico, todos sus derivados.  Fundamos la empresa en 2020 con la pandemia. 
                Si practicas windsurf, surf, kitesurf, bodyboard, surf, buceo, pesca o lo que sea en el agua, y el frio
                no es un obstaculo, queremos traerte a nuestro pais lo mejor del mundo en neoprene, trajes australianos, echos en indonesia y taiwan
                vanguardistas en todo lo que se refiere a este arte de atravesar el frio en contacto con la naturaleza.
              </p>
              <p>
                Somos importadores directos, y como amantes de estos deportes, necesitamos ofrecerles lo mejor y ultimo del mercado al mejor precio, 
                tuviumos la suerte de viajar por muchas partes del mundo y contactar con gente que nos pudo brindar todo lo que necesitamos para traerte 
                de sus paises lo mejor, directo de fabrica.
              </p>
            </div>
            <div id="AboutImage">
              <img draggable="false" src={Image} alt="Error" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About
