import React from 'react'
import headerStyle from '../../../styles/mayor/HeaderMayor.module.css'

const IntroSec = ({openPodrska}) => {
  return (
    <div className={headerStyle.lowerHeader}>
        <div className={headerStyle.innerLower}>
            <span className={!openPodrska ? headerStyle.iconLow :  headerStyle.iconLowPodrska}></span>
            <span className={headerStyle.iconRight}>&#62;</span>
            <span className={headerStyle.titleLow}>{!openPodrska ? 'Dashboard' : 'Podrska'}</span>
        </div>
    </div>
  )
}

export default IntroSec