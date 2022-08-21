import React from 'react'
import mainDataStyle from '../../styles/mayor/MainData.module.css';
import BoxData from './BoxData';

const MainData = () => {
  return (
    <section className={mainDataStyle.mdWrapp}>
        <BoxData />
    </section>
  )
}

export default React.memo(MainData)