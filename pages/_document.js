import { Html, Head, Main, NextScript } from 'next/document'
import CustomHelmet from '../components/CustomHelmet'
export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        <CustomHelmet />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
