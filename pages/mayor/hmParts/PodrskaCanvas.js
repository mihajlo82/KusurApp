import React from 'react'
import headerStyle from '../../../styles/mayor/HeaderMayor.module.css'
import { successData } from '../../dataChart/DataChart'
import PodrskaCanvasSingle from './PodrskaCanvasSingle'

const PodrskaCanvas = () => {

  return (
    <div className={headerStyle.podrskaCanvas}>
        { successData.map( (item,i) => <PodrskaCanvasSingle key={item.title} item={item} i={i} /> )}
    </div>
  )
}

export default PodrskaCanvas