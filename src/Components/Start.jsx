import React, { useState } from 'react'
import '../index.css'
import '../tabres.css'
import '../responsive.css'
import TextField from '@material-ui/core/TextField'

const Start = () => {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    choice: '',
  })
  const inputStyle = {
    background: 'white',
    borderRadius: '5px',
  }
  document.title = 'Deport-Style - Contactanos'
  function GetData(val) {
    const { name, value } = val.target
    setData((preVal) => {
      return { ...preVal, [name]: value }
    })
  }
  const Submit = (val) => {
    alert(
      `Muchas gracias ${data.fullName} por enviarnos tu consulta
      
      Ya tenemos tu informacion 
      Eres de ${data.country}.
      Y nos preguntaste acerca de ${data.choice}.

te contactaremos a la brevedad a la casilla que nos enviaste. 🏄‍♂️ ${data.email}
      `,
    )
  }
  return (
    <>
      <section id="Start">
        <div id="Container">
          <div id="StartContentWrapper">
            <form onSubmit={Submit} autoComplete="off">
              <div id="InputField">
                <TextField
                  style={inputStyle}
                  onChange={GetData}
                  required
                  type="text"
                  name="fullName"
                  value={data.fullName}
                  label="Nombre completo"
                  variant="outlined"
                />
              </div>
              <div id="InputField">
                <TextField
                  style={inputStyle}
                  variant="outlined"
                  onChange={GetData}
                  required
                  type="email"
                  name="email"
                  label="Tu Email"
                  value={data.email}
                />
              </div>
              <div id="InputField">
                <TextField
                  style={inputStyle}
                  onChange={GetData}
                  required
                  variant="outlined"
                  type="number"
                  label="Telefono"
                  name="phone"
                  value={data.phone}
                />
              </div>
              <div id="InputField">
                <TextField
                  style={inputStyle}
                  onChange={GetData}
                  required
                  variant="outlined"
                  type="text"
                  label="De donde eres"
                  name="country"
                  value={data.country}
                />
              </div>
              <div id="InputField">
                <TextField
                  style={inputStyle}
                  onChange={GetData}
                  required
                  variant="outlined"
                  type="text"
                  label="Alguna Consulta"
                  name="choice"
                  value={data.choice}
                />
              </div>
              <button style={{ transition: '.5s' }}>Enviar</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
export default Start
