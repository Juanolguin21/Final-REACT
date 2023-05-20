import React, { useState } from 'react'; 
import Start from '../Components/Start.jsx';

const App = () => {
    const [showComponent, setShowComponent] = useState(false);
  
    const handleAlertAccept = () => {
      setShowComponent(true);
    };
  
    const handleAlert = () => {
      // Mostrar el alert
      alert(`Muchas gracias por realizar la Compra.
      
      Ya tenemos la informacion para enviarte tu/s traje de neoprene.
      
      Te Solicitaremos los ultimos datos para Contactarnos Contigo.

      Te contactaremos a la brevedad a la casilla que nos Describas
      
      Para Informarte los medios de Pago Acerca de Tu Traje   🏄‍♂️ 
      `);
      // Llamar a la función después de aceptar el alert
      handleAlertAccept();
    };


  return (
    <div>
      <button className='btn-clear-all' onClick={handleAlert}>Finalizar Compra</button>
      {showComponent && <Start />}
    </div>
  );
};

export default App;
