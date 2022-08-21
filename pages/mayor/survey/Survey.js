import surveyStyle from '../../../styles/mayor/Survey.module.css'
import SurvayMiddle from './middleSurvey/SurvayMiddle'
import SurvayRight from './survayRight/SurvayRight'
import SurveyLeft from './SurveyLeft'

const Survey = () => {
  return (
    <section className={surveyStyle.surveyWrapp}>
        <article className={surveyStyle.surveyMain}>
            <SurveyLeft />
            <SurvayMiddle/>
            <SurvayRight />
        </article>
    </section>
  )
}

export default Survey