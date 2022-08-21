import headerStyle from '../../../styles/mayor/HeaderMayor.module.css'

const ButtonsHM = ({setOpenPosdrska, setOpenKor}) => {
  return (
    <div className={headerStyle.upperHeader}>
        <span type='button' className={headerStyle.infoWrapp} >
            <h3 className={`${headerStyle.infoTitle} h3`}>Info</h3>
            <span className={headerStyle.infologo}></span>
        </span>

        <button type='button' className={headerStyle.podrskaWrapp} onClick={()=>setOpenPosdrska(prev => !prev)} >
            <span className={headerStyle.podrskalogo}></span>
            <h3 className={`${headerStyle.podrskaTitle} h3`}>Podrska</h3>
        </button>

        <button type='button' className={headerStyle.btnKorWrapp} onClick={()=>setOpenKor(prev=>!prev)} >
            <span className={headerStyle.korisniklogo}></span>
            <h3 className={`${headerStyle.korisnikTitle}`}>Korisnik</h3>
            <span className={headerStyle.korisnikArrow}></span> 
        </button>
    </div>
  )
}

export default ButtonsHM