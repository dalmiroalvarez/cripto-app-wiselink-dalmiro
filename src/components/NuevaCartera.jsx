import { formatearFecha } from "../helpers";

import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

const NuevaCartera = ({cartera, setCarteraEditar}) => {
    const {nombrecartera, nombrecripto, cantidad, fecha, id} = cartera;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setCarteraEditar(cartera)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )
    
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => console.log('Eliminandou')}>
                Eliminar
            </SwipeAction>
        </TrailingActions>        
    )    

  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
        >
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
    </SwipeableListItem>
    </SwipeableList>
  )
}

export default NuevaCartera