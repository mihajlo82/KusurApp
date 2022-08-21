import chartStyle from '../../../styles/mayor/Chart.module.css'

const DataReg = ({title1, title2, title3, left, top}) => {
  return (
    <div className={chartStyle.chartRegData} style={{ position:'absolute', top:top+'px', left:left+'px'} }>
        <p className={chartStyle.dateReg}>{title1}</p>
        <p className={chartStyle.regReg}>{title2}</p>
        <p className={chartStyle.regNo}>{title3}</p>
    </div>
  )
}

export default DataReg