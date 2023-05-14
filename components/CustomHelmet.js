import { Helmet } from "react-helmet";

const CustomHelmet = () => {
    const title = 'Victoriuu Tattoo'
    const description = 'Portfolio I Kontakt Victoriuu Tatoo'
    const keywords = 'tatuaże,portfolio,tattoo,design,tatuaże artystyczne,tatuaże lekkie'
    const siteURL = 'https://tattoo-iota.vercel.app'
    const img = 'https://tattoo-iota.vercel.app/header.jpg'
    return (  
        <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='color-scheme' content='light' />
        <meta property='og:title' content={title} />
        <meta property='og:type' content='website' />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={img} />
        <meta property='og:locale' content='pl-PL' />
        <meta property='og:url' content={siteURL} />
        <link rel='canonical' href={siteURL} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Roboto:wght@100;400;700;900&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css2?family=Castoro+Titling&display=swap" rel="stylesheet" /> 
    </Helmet>
    );
}
 
export default CustomHelmet;