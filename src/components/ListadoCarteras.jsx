import NuevaCartera from "./NuevaCartera"

const ListadoCarteras = ({carteras}) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{carteras.length ? 'Mis Carteras' : 'Todavía no has creado carteras.'}</h2>
        {carteras.map( cartera => (
            <NuevaCartera 
                key={cartera.id}
                cartera={cartera}
            />
        ))}
    </div>
  )
}

export default ListadoCarteras