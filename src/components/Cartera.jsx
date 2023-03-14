
const Cartera = ({dinero}) => {
  
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
                <span>Disponible: </span>{formatearCantidad(0)}
              </p>
              <p>
                <span>Total Gastado: </span>{formatearCantidad(0)}
              </p>
          </div>
      </div>
      </>      
    
  )
}

export default Cartera