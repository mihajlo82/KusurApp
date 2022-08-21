import React from 'react'
import styleMainMay from '../../../styles/mayor/MainMayor.module.css';

const ButtonsDateDD = () => {
  return (
    <div className={styleMainMay.btnDDWrapp}>
        <button className={styleMainMay.btnFinPrim}>Primijieni</button>
        <button className={styleMainMay.btnFinPon}>Ponisti</button>
    </div>
  )
}

export default ButtonsDateDD