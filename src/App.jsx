import '/index.css'

import { useState, useEffect } from 'react';

// COMPONENTS
import Header from './components/Header';
import Modal from './components/Modal';
import nuevaCartera from '../img/nuevo-gasto.svg'
import ListadoCarteras from './components/ListadoCarteras';

import {generarId} from './helpers/index'


function App() {

  const [dinero, setDinero] = useState(0)
  const [dineroValido, setDineroValido] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimalModal] = useState(false)
  const [carteras, setCarteras] = useState([])

  const [carteraEditar, setCarteraEditar] = useState({})

  useEffect(()=> {
    if(Object.keys(carteraEditar).length > 0) {
      setModal(true)    

    setTimeout(() => {
      setAnimalModal(true)
    }, 500);
    }
  }, [carteraEditar])

  const handleNuevaCartera = () => {
    setModal(true)
    setCarteraEditar({})

    setTimeout(() => {
      setAnimalModal(true)
    }, 500);
  }
  
  const guardarCartera = cartera => {
    if(cartera.id) {
      const carteraActualizada = carteras.map( carteraState => carteraState.id === cartera.id ? cartera : carteraState )

      setCarteras(carteraActualizada)
    } else {
      cartera.id = generarId();
      cartera.fecha = Date.now();
      setCarteras([...carteras, cartera])      
    }
    setAnimalModal(false)      
      setTimeout(() => {
        setModal(false)          
    }, 500);
  }

  const eliminarCartera = id => {
    console.log('Eliminando', id)
  }

  return (
    <>
    <Header
      carteras={carteras} 
      dinero={dinero}
      setDinero={setDinero}
      dineroValido={dineroValido}
      setDineroValido={setDineroValido}
    />
    
    {dineroValido && (
      <>
      <main>
        <ListadoCarteras 
          carteras={carteras}
          setCarteraEditar={setCarteraEditar}
          eliminarCartera={eliminarCartera}
        />
      </main>
      <div className='nuevo-gasto'>
        <img
          src={nuevaCartera}
          alt='Nueva Cartera'
          onClick={handleNuevaCartera}
        />
      </div>
      </>
      )}

      {modal && 
      
      <Modal 
        setModal={setModal}
        animarModal={animarModal}
        setAnimalModal={setAnimalModal}
        guardarCartera={guardarCartera}
        carteraEditar={carteraEditar}
      />}

    </>
  )
}

export default App
