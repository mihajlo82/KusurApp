import React from 'react'
import boxDataStyle from '../../styles/mayor/MainData.module.css'
import Image from 'next/image'
import badge from '../../assets/bussines.png';

const BoxSingle = () => {
  return (
    <div className={boxDataStyle.boxBiggest}>
        <div className={boxDataStyle.upperPart}>
            <div className={boxDataStyle.wrapPacket}>
                <p className={boxDataStyle.titleBus}>Trenutno aktivni paket</p>
                <div className={boxDataStyle.badgeWrapp}>
                    <span className={boxDataStyle.badgeImg}>
                      <Image src={badge}  width={13} height={13} alt='image'/>
                    </span>

                    <p className={boxDataStyle.bussinesTitle}>BUSSINESS</p>
                </div>
           </div>
        </div>

        <div className={boxDataStyle.lowerPart}>
            <div className={boxDataStyle.lowerDataWrapp}>
                <p className={boxDataStyle.textThank}>Hvala na povjerenju! Kusur tim!</p>
                <p className={boxDataStyle.textValidi}>Paket aktivan do 15.10.2022 15:28</p>
            </div>
        </div>
    </div>
  )
}

export default BoxSingle