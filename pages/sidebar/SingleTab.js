import React, {useState} from 'react'
import Image from 'next/image';
import sidebarStyle from '../../styles/sidebar/Sidebar.module.css';

const SingleTab = ({item, index,subtabsMainSide,tabsMainLogo}) => {
   const [showSubtab, setShowSubtab] = useState(true);
  return (
    <>
    <div key={index} className={sidebarStyle.inactiveTabWrapp} onClick={()=> setShowSubtab(prev=>!prev)}>
        <Image src={tabsMainLogo[index]} width="18" height="14" alt="logo" />
        <h3 className={`h3-white ${sidebarStyle.nameDash}`}>{item}</h3>
        <span className={sidebarStyle.uppArr}></span>
     </div>
        { showSubtab && subtabsMainSide.length > 0 && subtabsMainSide[index].map((item, index)=> {
            return(
            <div key={item+index} className={sidebarStyle.inactiveTabWrapp}>
              <h3 className={`h3-white ${sidebarStyle.nameDash}`}>{item}</h3>
            </div>
            )
        })}
    </>
  )
}

export default SingleTab