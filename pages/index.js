import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function NavBar(props) {
  return (
    <nav className={styles.navigation_bar}>
      <div className={styles.navigation_bar__button_box}>
        {props.buttons.map((button) => <a className={styles.navigation_bar__button_box__button} href={button.link}>{button.text}</a>)}
      </div>
    </nav>
  );
}

function Presentation() {
  return (
    <div style={{ padding: "15% 5%", border: "3px solid black", width: "94%", margin: "1% 3%", overflow: "hidden", background: "white" }}>
      <div style={{ width: "50%", float: "left" }}>
        <h1 style={{ textAlign: "center", fontSize: "7rem", fontWeight: "bold" }}>µHacks</h1>
        <h2 style={{ textAlign: "center", fontSize: "2rem" }}>µprojects with BIG IMPACT</h2>
        <br /><br /><br /><br /><br /><br />
        <h3 style={{ textAlign: "center", fontSize: "1.5rem" }}>Virtual Hackathon</h3>
        <div style={{ textAlign: "center", margin: "10px" }}>
          <button style={{ color: 'green', border: "1px solid green", borderRadius: "3px", padding: "10px 30px", fontSize: "1.5rem" }}>Coming soon!</button>
        </div>
      </div>
      <div style={{ width: "50%", float: "right", textAlign: "center" }}>
        <Image src={'/logo.png'} width={500} height={500} />
      </div>
    </div >
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>µHacks | Homepage</title>
        {/* Font links */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        {/* /Font links */}
      </Head>
      <main style={{ backgroundImage: 'url(/background-test.png)', backgroundRepeat: "repeat-y", backgroundSize: "100% auto", minHeight: "100vh", padding: "1% 0" }}>
        <NavBar buttons={[
          { text: 'Link 1', link: '/somelink1' },
          { text: 'Link 2', link: '/somelink2' },
          { text: 'Link 3', link: '/somelink3' },
          { text: 'Link 4', link: '/somelink4' },
          { text: 'Link 5', link: '/somelink5' },
        ]} />
        <Presentation />
      </main>
    </div>
  );
}
