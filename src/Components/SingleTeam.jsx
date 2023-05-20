import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'

function SingleTeam(Equipo) {
  return (
    <>
      <div id="SingleTeam">
        <img draggable="false" src={Equipo.src} alt="Error" />
        <div id="TeamDesc">
          <h2> {Equipo.name} </h2>
          <p> {Equipo.desc} </p>
        </div>
      </div>
    </>
  )
}
export default SingleTeam
