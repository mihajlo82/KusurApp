import surveyStyle from '../../../../styles/mayor/Survey.module.css'
import PieGender from '../../charts/PieGender'
import { hairData } from '../../../dataChart/DataChart'

const SurvayMiddle = () => {
  return (
    <div className={surveyStyle.middleSurvey}>
        <PieGender data={hairData} argumentField="total"  valueField="percentage" />
    </div>
  )
}

export default SurvayMiddle