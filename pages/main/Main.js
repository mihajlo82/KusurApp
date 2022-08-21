import styleMain from '../../styles/Main.module.css';
import Sidebar from '../sidebar/Sidebar';
import Mayor from '../mayor/Mayor';
import React,{ Suspense, lazy } from 'react';
 const Footer = React.lazy(() => import('../footer/Footer')); 

const Main = () => {
  return (
    <main className={styleMain.mainWrapp} >
      <Sidebar />
      <Mayor />

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>    
    </main>
  )
}

export default Main