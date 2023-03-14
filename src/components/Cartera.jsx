import { useState, useEffect } from "react"

const Cartera = ({carteras, dinero}) => {
  
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  const [porcentaje, setPorcentaje] = useState(0)
  
  useEffect (() => {
    const totalGastado = carteras.reduce ((total, cartera) => cartera.cantidad + total, 0);
    
    const totalDisponible = dinero - totalGastado;

    //Calcular el porcentaje gastado

    // const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
    
    //setTimeout(() => {
      //  setPorcentaje(nuevoPorcentaje)            
    //}, 1000);      
    
    setGastado(totalGastado)
    setDisponible(totalDisponible)
}, [carteras])

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
              <p>Grafica Aqui</p>
          </div>      
          <div className="contenido-presupuesto">
              <p>
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