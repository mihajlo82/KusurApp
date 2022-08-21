import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from './main/Main'

export default function Home() {
  return (
    <div className={styles.homeWrapp} >
      <Head>
        <title>Kusur</title>
        <meta name="description" content="Kusur seo opis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Main />
    </div>
  )
}
