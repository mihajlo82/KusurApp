import React from 'react'
import boxDataStyle from '../../styles/mayor/MainData.module.css'
import Image from 'next/image'
import people from '../../assets/people.png';

const BoxTemplate = ({item, i}) => {
  const {name, value} = item;
  return (
    <div className={boxDataStyle.boxSmall} style={{marginLeft: i%3 === 0 ? '0px' :'18px'}}>
               
        <div className={boxDataStyle.logoWrapp}>
            <Image src={people}  width={39} height={39} alt='image'/>
        </div>

         <div className={boxDataStyle.dataDetailsWrapp}>
            <p className={boxDataStyle.regkor}>{name}</p>
            <p className={boxDataStyle.numUser}>{value}</p>
            <p className={boxDataStyle.thisWeek}>+8 ove sedmice</p>
         </div>
    </div>
  )
}

export default BoxTemplate