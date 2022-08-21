import chartStyle from '../../../styles/mayor/Chart.module.css'
import DataReg from './DataReg'
import HeaderReg from './HeaderReg'
import MainReg from './MainReg'

const ChartReg = () => {
  return (
    <article className={chartStyle.chartRegWrapp}>
      <HeaderReg/>
      <MainReg />
      <DataReg title1='26. Oktobar 2021.' title2='Registrovanih korisnika' title3='15' left='416'  top='73' />
    </article>
  )
}

export default ChartReg