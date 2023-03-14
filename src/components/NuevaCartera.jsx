import { formatearFecha } from "../helpers";

const NuevaCartera = ({cartera}) => {
    const {nombrecartera, nombrecripto, cantidad, fecha, id} = cartera;
  return (
    <div className="gasto sombra">
        <div className="contenido-gasto">
            <div className="descripcion-gasto">
                <p className="nombre-gasto">{nombrecartera}</p>
                <p className="categoria">{nombrecripto}</p>
                <p className="fecha-gasto">
                    Agregado el : {''}
                    <span>{formatearFecha(fecha)}</span>
                </p>
            </div>
        </div>
                <p className="cantidad-gasto">${cantidad}</p>
    </div>
  )
}

export default NuevaCartera