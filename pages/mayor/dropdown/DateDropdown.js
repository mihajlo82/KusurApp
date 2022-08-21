import React from 'react'
import styleMainMay from '../../../styles/mayor/MainMayor.module.css';
import DateUperDropDown from './DateUperDropDown';
import LowDateDropDown from './LowDateDropDown';

const DateDropdown = () => {
  return (
    <div className={styleMainMay.dateDropd}>
        <DateUperDropDown />
        <LowDateDropDown />      
    </div>
  )
}

export default DateDropdown