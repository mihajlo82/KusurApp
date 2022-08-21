import {useState} from 'react'
import styleMainMay from '../../styles/mayor/MainMayor.module.css';
import arrDown from '../../assets/arrDown.png'
import calendar from '../../assets/dash2.png';
import Image from 'next/image';
import DateDropdown from './dropdown/DateDropdown';

const MainMayorTitle = () => {
  const [openCalDrop, setOpenCalDrop] = useState(false);
  return (
    <article className={styleMainMay.MmTitleWrapp} >
      <div className={styleMainMay.MmTitleWrappInner}>
          <div className={styleMainMay.titleWrappLeft}>
              <p className={styleMainMay.titleLeft}>Dashboard statistics</p>
          </div>

          <div className={styleMainMay.MmTitleWrappButtons}> 
              <div className={styleMainMay.BtnPoslovnica} style={{marginRight:'20px'}} onClick={()=>setOpenCalDrop(prev => !prev)} >
                  <span className={styleMainMay.titlePoslovnica}>Ovaj mjesec</span>
                  <span className={styleMainMay.arrDown}>
                      <Image src={calendar} alt='logo' width={14} height={16} />
                  </span>
              </div>
              <div className={styleMainMay.BtnPoslovnica}>
                  <span className={styleMainMay.titlePoslovnica}>Poslovnica X</span>
                  <span className={styleMainMay.arrDown}>
                      <Image src={arrDown} alt='logo' width={12} height={12} />
                  </span>
               </div>          
          </div>

         {openCalDrop && <DateDropdown /> } 
      </div>
    </article>
  )
}

export default MainMayorTitle