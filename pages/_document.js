import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  const title = "Victoriuu Tattoo";
  const description = "Portfolio I Kontakt Victoriuu Tattoo";
  const keywords =
    "tatuaże,portfolio,tattoo,design,tatuaże artystyczne,tatuaże lekkie";
  const siteURL = "https://tattoo-iota.vercel.app";
  const img = "https://tattoo-iota.vercel.app/header.jpg";
  return (
    <Html lang="pl">
      <Head>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={img} />
        <meta property="og:locale" content="pl-PL" />
        <meta property="og:url" content={siteURL} />
        <link rel="canonical" href={siteURL} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@100;400;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Castoro+Titling&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
