import {useState} from 'react'
import headerStyle from '../../styles/mayor/HeaderMayor.module.css'
import HMDropdown from './dropdown/HMDropdown'
import ButtonsHM from './hmParts/ButtonsHM';
import IntroSec from './hmParts/IntroSec';
import PodrskaCanvas from './hmParts/PodrskaCanvas';

const HeaderMayor = () => {
    const [openKor,setOpenKor] = useState(false);
    const [openPodrska,setOpenPosdrska] = useState(false);

  return (
    <header className={headerStyle.headerMayorWrapp}>
        <ButtonsHM setOpenPosdrska={setOpenPosdrska} setOpenKor={setOpenKor} />
        <IntroSec openPodrska={openPodrska} />
        {openKor && <HMDropdown /> }
        {openPodrska && <PodrskaCanvas />}
    </header>
  )
}

export default HeaderMayor