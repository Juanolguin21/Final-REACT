import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'

const SectionTitle = (Equipo) => {
  return (
    <>
      <div id="SectionTitle">
        <h2> {Equipo.title} </h2>
        <p> {Equipo.desc} </p>
        <div id="Line"></div>
      </div>
    </>
  )
}
export default SectionTitle
