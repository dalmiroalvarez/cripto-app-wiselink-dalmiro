// COMPONENTS
import NuevaCartera from "./NuevaCartera"

const ListadoCarteras = ({carteras, setCarteraEditar, eliminarCartera, filtro, carterasFiltradas}) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{carteras.length ? 'Carteras de Usuarios' : 'Todavía no has creado carteras.'}</h2>
        
         {
          filtro ? ( 
            carterasFiltradas.map( cartera => (
              <NuevaCartera 
                  key={cartera.id}
                  cartera={cartera}
                  setCarteraEditar={setCarteraEditar}
                  eliminarCartera={eliminarCartera}
              />
          ))
          ) : ( carteras.map( cartera => (
            <NuevaCartera 
                key={cartera.id}
                cartera={cartera}
                setCarteraEditar={setCarteraEditar}
                eliminarCartera={eliminarCartera}
            />
        )) 
        )
        }          
    </div>
  )
}

export default ListadoCarteras