import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  function sendMail() {
    Email.send({
      SecureToken : "9ad5ea20-233e-400d-835d-d5df0e7a8486",
      To : 'eduardoaayora24@gmail.com',
      From : "eduardoaayora24@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
    }).then(
      message => alert(message)
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      hola Jose
      <button onClick={sendMail}>Enviar Mail</button>
    </div>
  )
}
