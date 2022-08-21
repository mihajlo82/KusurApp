import React from 'react'
import boxDataStyle from '../../styles/mayor/MainData.module.css'
import BoxSingle from './BoxSingle';
import BoxTemplate from './BoxTemplate';
import useMain from '../main/useMain';

const BoxData = () => {
  const {cardData} = useMain()
  return (
    <article className={boxDataStyle.boxDataWrapp}>
          <BoxSingle />

          <div className={boxDataStyle.boxSmallWrapp}>
           {cardData.map((item,i) => <BoxTemplate key={item.id} item={item} i={i} /> ) }
          </div>
    </article>
  )
}

export default BoxData