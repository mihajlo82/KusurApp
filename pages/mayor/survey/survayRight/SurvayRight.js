import surveyStyle from '../../../../styles/mayor/Survey.module.css'
import SingleInfo from './SingleInfo'
import { infoData } from '../../../dataChart/DataChart'

const SurvayRight = () => {
  return (
    <aside className={surveyStyle.rightSurvey}>
        <div className={surveyStyle.rightInfoWrapp}>
            <p className={surveyStyle.info}>Informacije</p>
            <div className={surveyStyle.detInfo}>
                {infoData.length > 0 && infoData !== undefined && infoData.map( (item,i) => <SingleInfo key={item.id} item={item} i={i} />)}
            </div>
        </div>
    </aside>
  )
}

export default SurvayRight