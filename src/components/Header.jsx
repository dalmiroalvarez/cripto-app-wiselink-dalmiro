import React from 'react'
import Cartera from './Cartera'
import DefinirDinero from './DefinirDinero'


const Header = ({dinero, setDinero, dineroValido, setDineroValido}) => {
  return (
    <header>
        <h1>Cartera de Criptomonedas</h1>
        
        {dineroValido ? (
            <Cartera 
                dinero={dinero}
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