import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='icon' href='/images/sindicato-si.jpg' />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src='https://smtpjs.com/v3/smtp.js'></script>
      </body>
    </Html>
  )
}
