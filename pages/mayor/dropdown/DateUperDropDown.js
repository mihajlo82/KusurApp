import React from 'react'
import styleMainMay from '../../../styles/mayor/MainMayor.module.css';

const DateUperDropDown = () => {
  return (
    <div className={styleMainMay.uppDate}>
        <div className={styleMainMay.uppDate}> 
            <div className={styleMainMay.uppDateLeft}>
                <p className={styleMainMay.typeDate}>Danas</p>
                <p className={styleMainMay.typeDate} style={{backgroundColor:'#EBECEE', width:'82px'}}>Ovaj mjesec</p>
                <p className={styleMainMay.typeDate}>Ova godina</p>
            </div>

            <div className={styleMainMay.uppDateLeft}>
                <p className={styleMainMay.typeDate}>Ova sedmica</p>
                <p className={styleMainMay.typeDate}>Prosli mjesec</p>
                <p className={styleMainMay.typeDate}>Prosla godina</p>
            </div>
        </div>
    </div>
  )
}

export default DateUperDropDown