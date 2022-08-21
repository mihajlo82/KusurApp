import React from 'react'
import SuccItems from './SuccItems';
import headerStyle from '../../../styles/mayor/HeaderMayor.module.css'

const PodrskaCanvasSingle = ({item, i}) => {
    const {title, desc, sd} = item;
  return (
    <div className={headerStyle.boxPodWrapp} style={{marginLeft: i === 0 ? '56px' : '20px'}}>
        <h1 className={headerStyle.podTitle}>{title}</h1>
        <div className={headerStyle.podBody}>
            <p className={headerStyle.descPod}>{desc}</p>

            <div>
                {sd.map((item,i) => <SuccItems key={item} item={item} i={i} />)}
            </div>

            <button type='button' className={headerStyle.kontBtn}>Kontakirajte nas</button>
        </div>
    </div>
  )
}

export default PodrskaCanvasSingle