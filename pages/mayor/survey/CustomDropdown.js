import surveyStyle from '../../../styles/mayor/Survey.module.css'
import up from '../../../assets/arrDown.png'
import Image from 'next/image'

const CustomDropdown = ({fieldsetTitle,title,top,left}) => {
  return (
    <form className={surveyStyle.dropdCustWrapp} style={{position:'absolute', top:top+'px', left:left+"px",}}>
        <fieldset className={surveyStyle.dropdCustWrappField} style={{width:'431px'}}>
            <legend className={surveyStyle.fieldset}>{fieldsetTitle}:</legend>
            <div className={surveyStyle.dropdMain}>
                <span className={surveyStyle.titleDrop}>{title}</span>
                <Image src={up} width={14} height={10} alt='up' />
            </div>
        </fieldset>
    </form>
  )
}

export default CustomDropdown