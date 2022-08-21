import chartStyle from '../../../styles/mayor/Chart.module.css'
import Image from 'next/image'
import downarr from '../../../assets/arrDown.png';

const HeaderReg = () => {
  return (
    <header className={chartStyle.hregWrapp}>
        <div className={chartStyle.dropdWrapp}>
            <span className={chartStyle.dropdTitle}>Registrovanih korisnika</span>
            <span className={chartStyle.logoWrapp}>
                <Image src={downarr} width={14} height={12} alt='arrow down' />
            </span>
        </div>
    </header>
  )
}

export default HeaderReg