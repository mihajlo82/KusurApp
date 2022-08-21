import chartStyle from '../../../styles/mayor/Chart.module.css'
import ChartYearUser from './ChartYearUser'
import DataReg from './DataReg'

const YearsUser = () => {
  return (
    <article className={chartStyle.yearsUserWrapp}>
        <p className={chartStyle.yearsUserTitle}>Godine korisnika</p>
        <ChartYearUser />
        <DataReg title1='38-48' title2='Broj korisnika' title3='308' left='79'  top='71' />
    </article>
  )
}

export default YearsUser