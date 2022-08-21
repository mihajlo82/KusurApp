import surveyStyle from '../../../../styles/mayor/Survey.module.css'

const SingleInfo = ({item, i}) => {
  return (
    <div className={surveyStyle.singinfoWrapp} style={{marginTop: i > 0 ? '15px' : '0px'}}>
        <p className={surveyStyle.singleTitle}>{item.title}</p>
        <p className={surveyStyle.singleNumber}>{item.number}</p>
    </div>
  )
}

export default SingleInfo