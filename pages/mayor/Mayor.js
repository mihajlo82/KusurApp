import React from 'react'
import mayorStyle from '../../styles/mayor/Mayor.module.css'
import Chart from './charts/Chart'
import HeaderMayor from './HeaderMayor'
import MainData from './MainData'
import MainMayorTitle from './MainMayorTitle'
import Survey from './survey/Survey'

const Mayor = () => {
  return (
    <section className={mayorStyle.mayorWrapp}>
        <HeaderMayor />
        <MainMayorTitle />
        <MainData />
        <Chart />
        <Survey />
    </section>
  )
}

export default Mayor