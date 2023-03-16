// HOOKS
import {useState} from 'react'

// COMPONENTS
import Mensaje from './Mensaje'

// Añadiendo Dinero a la cuenta.
const DefinirDinero = ({dinero, setDinero, setDineroValido}) => {

  const [mensaje, setMensaje] = useState('')

  const handleDinero = (e) => {
    e.preventDefault()

    if(!dinero || dinero < 0 ) {
      setMensaje('No es un presupuesto válido')
      
      return
    }
    setMensaje('')
    setDineroValido(true)  
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form onSubmit={handleDinero} className='formulario'>
        <div className='campo'>
          <label>Define tu Presupuesto:</label>
          <input
            className='nuevo-presupuesto'
            type='number'
            placeholder='Agrega tu presupuesto aquí'
            value={dinero}
            onChange={ e => setDinero(Number(e.target.value)) }
          />
          <input
            type='submit'
            value='Añadir'            
          />
          <h4>Para poder realizar transacciones requerimos que establezcas tu presupuesto.</h4>
          
          {/* Alerta */}
          {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

        </div>
      </form>
    </div>
  )
}

export default DefinirDinero