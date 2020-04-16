import React, { Fragment } from 'react';
import Formulario from './components/Formulario';

function App() {

  // Arreglo citas
  const [citas, guardarCitas] = useState([]);

  // Función que tome las citas actuales y agregue la nueva
  

  return (
  <Fragment>
      <h1>Administardor de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
          <Formulario />
          </div> 
          <div className="one-half column">2</div> 
        </div>
      </div>
  </Fragment>
  );
}

export default App;
