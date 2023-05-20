import React from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'
import TeamData from './TeamData'
import SingleTeam from './SingleTeam'
import SectionTitle from './SectionTitle'

function Team() {
  document.title = 'Deport-Style - Team'
  return (
    <>
      <section id="Team">
        <div id="Container">
          <SectionTitle title="Nuestro Equipo" desc="Trabajamos en equipo en distintas partes del mundo" />
          <div id="TeamContentWrapper">
            {TeamData.map((data, index) => {
              return (
                <SingleTeam
                  key={data.id}
                  src={data.src}
                  desc={data.desc}
                  name={data.name}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
export default Team
