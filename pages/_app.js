import '../styles/globals.scss'
import '../styles/Mixins.scss'
import CustomHelmet from '../components/CustomHelmet'
export default function App({ Component, pageProps }) {
  return(
    <>
    <CustomHelmet Customtitle='Victoriuu Tattoo'/>
    <Component {...pageProps} />
    </>

  )
  
  
}
