import React from 'react'
import chartStyle from '../../../styles/mayor/Chart.module.css'
import ChartReg from './ChartReg'
import Gender from './Gender'
import YearsUser from './YearsUser'

const Chart = () => {
  return (
    <section className={chartStyle.chartUpperWrapp}>
        <ChartReg />
        <Gender />
        <YearsUser />
    </section>
  )
}

export default React.memo(Chart)