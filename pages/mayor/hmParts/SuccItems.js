import React from 'react'
import headerStyle from '../../../styles/mayor/HeaderMayor.module.css'
import Image from 'next/image'
import success from '../../../assets/succes.png'

const SuccItems = ({item, i}) => {
    return (
        <div className={headerStyle.succTxtWrapp} style={{marginTop: i > 0 ? '5px' : '15px'}}>
            <Image src={success}  width={18}  height={18} alt='success logo' />
            <p className={headerStyle.succTxt}>{item}</p>
        </div>
  )
}

export default SuccItems