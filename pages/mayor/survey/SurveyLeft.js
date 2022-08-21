import React from 'react'
import surveyStyle from '../../../styles/mayor/Survey.module.css'
import CustomDropdown from './CustomDropdown'
import LeftChbForm from './LeftChbForm'
import LeftRadioForm from './LeftRadioForm'

const SurveyLeft = () => {
  return (
    <div className={surveyStyle.leftSurvey}>
        <CustomDropdown fieldsetTitle='Odaberi anketu'  title='Welcome Survey' top='20' left='20' />
        <LeftRadioForm />
        <LeftChbForm /> 
        <CustomDropdown fieldsetTitle='Starosna dob' title='Sve starosne dobi' top='356' left='20' />
    </div>
  )
}

export default SurveyLeft