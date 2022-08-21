import React from 'react'
import headerStyle from '../../../styles/mayor/HeaderMayor.module.css'
import Image from 'next/image'
import user from '../../../assets/users.png'
import signout from '../../../assets/signout.png'

const HMDropdown = () => {
  return (
    <div className={headerStyle.korisnikBox}>
        <div className={headerStyle.kbItem}>
            <div className={headerStyle.kbInner}>
                <Image src={user} alt='set logo' width={15} height={12} />
                <h3 className={headerStyle.namePostavke}>Postavke</h3>
            </div>
        </div>

        <div className={headerStyle.kbItem}>
        <div className={headerStyle.kbInner}>
                <Image src={signout} alt='odjava logo' width={16} height={14} />
                <h3 className={headerStyle.namePostavke}>Odjava</h3>
            </div>
        </div>
</div>
  )
}

export default HMDropdown