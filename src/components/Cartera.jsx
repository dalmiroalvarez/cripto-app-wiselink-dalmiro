// HOOKS
import { useState, useEffect } from "react"

// REACT-CIRCULAR PROGRESS BAR
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Cartera = ({carteras, dinero, setCarteras, setDinero, setDineroValido}) => {
    
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  const [porcentaje, setPorcentaje] = useState(0)
  
   useEffect (() => {
   const totalGastado = carteras.reduce ((total, cartera) => cartera.cantidad + total, 0);
    
     const totalDisponible = dinero - totalGastado;

     //Calcular el porcentaje gastado

     const nuevoPorcentaje = (((dinero - totalDisponible) / dinero) * 100).toFixed(2);
    
     setTimeout(() => {
        setPorcentaje(nuevoPorcentaje)            
     }, 1000);      
    
     setGastado(totalGastado)
     setDisponible(totalDisponible)
 }, [carteras])

  
// Pasar al valor
const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('es-AR', {
      style: 'currency',
      currency:'ARS'
    })
  }

  return (
      <>
      <div className="contenedor-presupuesto contenedor sombra dos-columnas">
          <div>
              <CircularProgressbar
                styles={buildStyles({
                  pathColor: porcentaje > 100 ? '#dc2626' : '#7c81c6',
                  trailColor: '#f5f5f5',
                  textColor: porcentaje > 100 ? '#dc2626' : '#7c81c6'
                })}                
                value={porcentaje}
                text={`${porcentaje}% Gastado`}
              />
          </div>      
          <div className="contenido-presupuesto">                
              <p className={`${disponible < 0 ? 'negativo' : '' }`}>
                <span>Presupuesto: </span>{formatearCantidad(dinero)}
              </p>
              <p>
                <span>Disponible: </span>{formatearCantidad(disponible)}
              </p>
              <p>
                <span>Total Gastado: </span>{formatearCantidad(gastado)}
              </p>
          </div>
      </div>
      </>      
    
  )
}

export default Cartera