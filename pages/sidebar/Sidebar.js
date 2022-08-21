import React from 'react'
import sidebarStyle from '../../styles/sidebar/Sidebar.module.css';
import Image from 'next/image';
import logo from '../../assets/logo.png';
import SingleTab from './SingleTab';
import { tabsMainSide, tabsMainLogo, subtabsMainSide} from './SidetabsData';

const Sidebar = () => {
  return (
    <aside className={sidebarStyle.sidebarWrapp}>
     
      <header className={sidebarStyle.logoWrapp}>
         <Image src={logo} width={82} height={23} alt="logo"  className={sidebarStyle.logo} />
      </header>
      
      <div className={sidebarStyle.tabs}>
        {tabsMainSide.map( (item, index) => <SingleTab subtabsMainSide={subtabsMainSide} tabsMainLogo={tabsMainLogo} key={item+index} item={item} index={index}/> )}
      </div>
    </aside>
  )
}

export default React.memo(Sidebar);