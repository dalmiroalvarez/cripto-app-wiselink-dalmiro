import NuevaCartera from "./NuevaCartera"

const ListadoCarteras = ({carteras, setCarteraEditar, eliminarCartera}) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{carteras.length ? 'Mis Carteras' : 'Todavía no has creado carteras.'}</h2>
        {carteras.map( cartera => (
            <NuevaCartera 
                key={cartera.id}
                cartera={cartera}
                setCarteraEditar={setCarteraEditar}
                eliminarCartera={eliminarCartera}
            />
        ))}
    </div>
  )
}

export default ListadoCarteras