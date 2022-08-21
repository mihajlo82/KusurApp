import surveyStyle from '../../../styles/mayor/Survey.module.css'

const LeftChbForm = () => {
  return (
      <form className={surveyStyle.checkboxWrapp} >
        <p className={surveyStyle.filterCh}>Filter:</p>
        <input type="checkbox" id="m" name="muskarci" value="Muskarci" className={surveyStyle.chbox} />
        <label htmlFor="m" className={surveyStyle.labcheck}> Muskarci</label>
        <input type="checkbox" id="zene" name="zene" value="Zene"  className={surveyStyle.chbox} style={{marginLeft:'33px'}}  />
        <label htmlFor="zene" className={surveyStyle.labcheck}> Zene</label><br />
      </form>
  )
}

export default LeftChbForm