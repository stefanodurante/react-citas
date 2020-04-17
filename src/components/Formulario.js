import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid/v4';
import PropTypes from 'prop-types'

const Formulario = ({crearCita}) => {

	// Crear State de Citas
	const [ cita, actualizarCita ] = useState({
		mascota: '',
		propietario: '',
		fecha: '',
		hora: '',
		sintomas: ''
	});

	// creamos un state para la validación
	const [error, actualizarError] = useState(false);


	// Función que se ejecuta cada vez que el usuario escribe

	const handleChange = e => {
		//console.log(e.target.value);
		actualizarCita({
			
			// siempre haz una copia del estate utilizando spread
			...cita,
			// array destructuring
			[e.target.name]:e.target.value
		})
	}

	// Extraer valores

	const{ mascota, propietario, fecha, hora, sintomas } = cita;	


	// Enviar el form
	// e => event


	const submitCita = e => {
		e.preventDefault();

		// 1 - Validar
		if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || 
			hora.trim() === '' || sintomas.trim() === ''){

			actualizarError(true);
			return //Siempre hay que agregar un return para que no se siga leyendo el código

		}
		
		// Eliminar mensaje de error - volvemos a poner el state a false
		actualizarError(false); 

		// 2 - Asignar ID
		cita.id = uuidv4();//utilizamos el plugin uuid

		// 3 - Crear cita
		crearCita(cita);
		

		// 4 - Reiniciar form
		actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
	}

	return ( 
		<Fragment>
			<h2>Crear citas</h2>

			{ error ? <p className="alerta-error">Todos los campos son obligatorio</p> : null}

			<form
				onSubmit={submitCita}
			>
				<label>
					Nombre Mascota
				</label>
				<input
					type="text"
					name="mascota"
					className="u-full-width"
					placeholder="Nombre Mascota"
					onChange={handleChange}
					value={mascota}
				/>

				<label>
					Nombre Dueño
				</label>
				<input
					type="text"
					name="propietario"
					className="u-full-width"
					placeholder="Nombre Dueño de la mascota"
					onChange={handleChange}
					value={propietario}
				/>

				<label>
					Fecha 
				</label>
				<input
					type="date"
					name="fecha"
					className="u-full-width"
					onChange={handleChange}
					value={fecha}
				/>

				<label>
					Hora
				</label>
				<input
					type="time"
					name="hora"
					className="u-full-width"
					onChange={handleChange}
					value={hora}
				/>

				<label>
					Sintomas
				</label>
				<textarea
					className="u-full-width"
					name="sintomas"
					onChange={handleChange}
					value={sintomas}
				>
				</textarea>

				<button
					type="submit"
					className="u-full-width button-primary"
				>
					Agregar Cita
				</button>
			</form>
		</Fragment>
	 );
}

// tipado de las props
Formulario.propTypes = {
	crearCita: PropTypes.func.isRequired
}

export default Formulario;