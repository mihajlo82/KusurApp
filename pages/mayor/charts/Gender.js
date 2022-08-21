import chartStyle from '../../../styles/mayor/Chart.module.css'
import PieGender from './PieGender'
import { genderData } from '../../dataChart/DataChart';

const Gender = () => {
  return (
    <article className={chartStyle.genderWrapp}>
        <p className={chartStyle.spolTitle}>Spol korisnika</p>
        <PieGender data={genderData} argumentField="gender" valueField="percentage" />
    </article>
  )
}

export default Gender