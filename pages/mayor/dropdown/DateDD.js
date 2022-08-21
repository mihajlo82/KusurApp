import React from 'react'
import styleMainMay from '../../../styles/mayor/MainMayor.module.css';

const DateDD = () => {
   return (
    <div className={styleMainMay.ddWrap}> 
            <form className={styleMainMay.dropdCustWrapp} >
                <fieldset className={styleMainMay.dropdCustWrappField}>
                    <legend className={styleMainMay.fieldset}>Pocevsi od:</legend>
                    <div className={styleMainMay.dropdMain}>
                        <span className={styleMainMay.titleDrop}>28/03/2022</span>
                    </div>
                </fieldset>
            </form>

            <form className={styleMainMay.dropdCustWrapp}>
                <fieldset className={styleMainMay.dropdCustWrappField}>
                    <legend className={styleMainMay.fieldset}>Zakljuceno sa:</legend>
                    <div className={styleMainMay.dropdMain}>
                        <span className={styleMainMay.titleDrop}>16/04/2021</span>
                    </div>
                </fieldset>
            </form>
        </div>
  )
}

export default DateDD