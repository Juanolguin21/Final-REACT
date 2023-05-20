import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'
import { NavLink } from 'react-router-dom'

function Home() {
  document.title = 'Deport-Style - Home'
  return (
    <>
      <header>
        <div id="Container">
          <div id="HeaderContentWrapper">
            <div id="HeaderDesc">
              <h1>Este invierno, surfeá sin Frio. </h1>
              <p>
              Somos importadores de Trajes de Neoprene..  <span> Todas las marcas de vanguardia </span>
              </p>
              <NavLink exact to="/project">
                Nuestros Productos.
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
export default Home
