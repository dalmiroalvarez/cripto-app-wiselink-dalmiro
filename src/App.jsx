import '/index.css'

import { useState } from 'react';

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

  const handleNuevaCartera = () => {
    setModal(true)

    setTimeout(() => {
      setAnimalModal(true)
    }, 500);
  }
  
  const guardarCartera = cartera => {
    cartera.id = generarId();
    cartera.fecha = Date.now();
    setCarteras([...carteras, cartera])

    setAnimalModal(false)
      
      setTimeout(() => {
        setModal(false)          
    }, 500);
  }

  return (
    <>
    <Header 
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
      />}

    </>
  )
}

export default App
