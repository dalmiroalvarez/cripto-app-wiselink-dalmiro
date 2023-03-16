// STYLES
import '/index.css'

// HOOKS
import { useState, useEffect } from 'react';

// COMPONENTS
import Header from './components/Header';
import Modal from './components/Modal';
import ListadoCarteras from './components/ListadoCarteras';
import Filtros from './components/Filtros';

// IMAGES
import nuevaCartera from '../img/nuevo-gasto.svg'

// HELPERS
import {generarId} from './helpers/index'


function App() {

  const [dinero, setDinero] = useState(0)
    
  const [carteras, setCarteras] = useState([])

  const [dineroValido, setDineroValido] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimalModal] = useState(false)

  const [carteraEditar, setCarteraEditar] = useState({})

  const [filtro, setFiltro] = useState('')
  const [carterasFiltradas, setCarterasFiltradas] = useState([])

  

  useEffect(() => {
    if(filtro) {
      const carterasFiltradas = carteras.filter(cartera => cartera.nombrecartera === filtro)
      setCarterasFiltradas(carterasFiltradas)
    }

  }, [filtro])
  

  useEffect(()=> {
    if(Object.keys(carteraEditar).length > 0) {
      setModal(true)    

    setTimeout(() => {
      setAnimalModal(true)
    }, 500);
    }
  }, [carteraEditar])
  
  // Agregar Nuevas Carteras
  const handleNuevaCartera = () => {
    setModal(true)
    setCarteraEditar({})

    setTimeout(() => {
      setAnimalModal(true)
    }, 500);
  }
  

// FC 1 SIN ID
  //   const guardarCartera = cartera => {
    
//     setCarteras([...carteras, cartera])   


//   setAnimalModal(false)      
//     setTimeout(() => {
//       setModal(false)          
//   }, 500);
// }

  // Editar carteras - Map
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
  // Eliminar Cartera - Filter
  const eliminarCartera = id => {
    const carteraActualizada = carteras.filter( cartera => cartera.id !== id )

    setCarteras(carteraActualizada)
  }

  return (
    <>
    <Header
      carteras={carteras}
      setCarteras={setCarteras} 
      dinero={dinero}      
      setDinero={setDinero}
      dineroValido={dineroValido}
      setDineroValido={setDineroValido}
    />
    
    {dineroValido && (
      <>
      <main>
        <Filtros
        carteras={carteras}
        filtro={filtro}
        setFiltro={setFiltro}
        />
        <ListadoCarteras 
          carteras={carteras}
          setCarteraEditar={setCarteraEditar}
          eliminarCartera={eliminarCartera}
          filtro={filtro}
          carterasFiltradas={carterasFiltradas}
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
        setCarteraEditar={setCarteraEditar}
      />}

    </>
  )
}

export default App
