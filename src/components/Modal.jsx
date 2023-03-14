import { useEffect, useState } from 'react'

import cerrarModalBtn from '../../img/cerrar.svg'
import Mensaje from './Mensaje'


const Modal = ({setModal, animarModal, setAnimalModal, guardarCartera, carteraEditar}) => {
    
    const [nombrecartera, setNombrecartera] = useState('')
    const [nombrecripto, setNombrecripto] = useState('- Seleccione Criptomoneda -')
    const [cantidad, setCantidad] = useState(0)
    const [mensaje, setMensaje] = useState('')
    const [id, setId] = useState('')
    const [fecha, setFecha] = useState('')

    useEffect(() => {
        if(Object.keys(carteraEditar).length > 0) {
            setNombrecartera(carteraEditar.nombrecartera)
            setNombrecripto(carteraEditar.nombrecripto)
            setCantidad(carteraEditar.cantidad)
            setId(carteraEditar.id)
            setFecha(carteraEditar.fecha)
          }
    }, [])

    const [criptomonedas, setCriptomonedas] = useState([])    
    
    useEffect(() => {
    
        const consultarApi = async() => {
            const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=ars'
    
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            // console.log(resultado)
            const criptomonedas = resultado.map(cripto => {
                const objetoCripto = {
                    nombre: cripto.name,
                    id: cripto.id,
                    url: cripto.image
                }
                return objetoCripto
            }) 
            console.log(criptomonedas)
            setCriptomonedas(criptomonedas)           

        }

        consultarApi()
    
    }, [])

  const cerrarModal = () => {
      setAnimalModal(false)
      
      setTimeout(() => {
        setModal(false)          
    }, 500);
  }

  const handleSubmit = e => {
    e.preventDefault()

    if([nombrecartera, nombrecripto, cantidad].includes('')) {
        setMensaje('Todos los campos son obligatorios')

        setTimeout(() => {
            setMensaje('')
        }, 2000);
    }
    guardarCartera({nombrecartera, nombrecripto, cantidad, id, fecha})

  }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
                src={cerrarModalBtn}
                alt='Cerrar'
                onClick={cerrarModal}
            />
        </div>
        <form 
            className={`formulario ${animarModal ? 'animar' : 'cerrar' }`}
            onSubmit={handleSubmit}
        >
            <legend>{carteraEditar.nombrecartera ? 'Editar Cartera' : 'Nueva Cartera'}</legend>
            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            <div className='campo'>
                <label htmlFor='cartera'>Nombre de tu Cartera</label>
                <input
                    id='cartera'
                    type='text'
                    placeholder='Añade el nombre de tu cartera'
                    onChange={e => setNombrecartera(e.target.value)}
                    
                />
            </div>
            <div className='campo'>
                {/*API*/}
                <label htmlFor='cripto'>Criptomoneda Deseada</label>
                <select onChange={e => setNombrecripto(e.target.value)}>
                    <option>- Seleccione Criptomoneda -</option>
                    {criptomonedas.map(cripto => (
                <option 
                    key={cripto.id} 
                    value={cripto.nombre}
                >
                    {cripto.nombre}
                </option>
            
                ))}
                </select>
            </div>
            <div className='campo'>
                <label htmlFor='cantidad'>Cantidad</label>
                <input
                    id='cantidad'
                    type='number'
                    placeholder='Añade la cantidad'
                    value={cantidad}
                    onChange={e => setCantidad(Number(e.target.value))}
                />
            </div>
                <input
                    type='submit'
                    value={carteraEditar.nombrecartera ? 'Guardar Cambios' : 'Agregar Cartera'}
                />            
        </form>
    </div>
  )
}

export default Modal