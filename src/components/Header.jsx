//COMPONENTS
import Cartera from './Cartera'
import DefinirDinero from './DefinirDinero'


const Header = ({dinero, setDinero, dineroValido, setDineroValido, carteras, setCarteras}) => {
  return (
    <header>
        <h1>Cartera de Criptomonedas</h1>
        
        {dineroValido ? (
            <Cartera
                carteras={carteras}
                setCarteras={setCarteras} 
                dinero={dinero}
                setDinero={setCarteras}
                setDineroValido={setDineroValido}
            /> ) : (
            <DefinirDinero 
                dinero={dinero}
                setDinero={setDinero}            
                setDineroValido={setDineroValido}
            />)}
    </header>
  )
}

export default Header