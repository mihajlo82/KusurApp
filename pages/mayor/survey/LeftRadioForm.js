import surveyStyle from '../../../styles/mayor/Survey.module.css'

const LeftRadioForm = () => {
  return (
    <form className={surveyStyle.questWrapp}>                     
            <p className={surveyStyle.titleQuest}>Odaberite pitanje:</p>
              <input type="radio" id="rod" name="fav_language" value="rod" className={surveyStyle.radio}/>
              <label  className={surveyStyle.radioLabel} htmlFor="rod">Kada ste rodjeni?</label><br />
              <input type="radio" id="kosa" name="fav_language" value="kosa" className={surveyStyle.radio}/>
              <label  className={surveyStyle.radioLabel} htmlFor="kosa">Da li perete kosu?</label><br />
              <input type="radio" id="sib" name="fav_language" value="sib" className={surveyStyle.radio} />
              <label className={surveyStyle.radioLabel}  htmlFor="sib">Sarma ili burek?</label><br />
              <input type="radio" id="det" name="fav_language" value="det" className={surveyStyle.radio} />
              <label className={surveyStyle.radioLabel} htmlFor="det">Koliko često koristite system Kusur primjer kako izgleda duže pitanje u dva ili više rodova gdje mi je lubenica svoj voz imaju?</label>
    </form>
  )
}

export default LeftRadioForm