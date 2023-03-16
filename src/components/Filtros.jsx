
const Filtros = ({carteras, filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label>Filtrar Usuarios</label>
                <select
                    value={filtro}
                    onChange={e => setFiltro(e.target.value)}
                >
                  

                    
                    {carteras.map (cartera =>   <option>{cartera.nombrecartera}</option> || [])}                   
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros