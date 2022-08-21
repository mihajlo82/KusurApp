import React from 'react'
import styleMainMay from '../../../styles/mayor/MainMayor.module.css';
import ButtonsDateDD from './ButtonsDateDD';
import DateDD from './DateDD';

const LowDateDropDown = () => {
  return (
    <div className={styleMainMay.lowDate}>
        <DateDD />
        <ButtonsDateDD />
    </div>
  )
}

export default LowDateDropDown