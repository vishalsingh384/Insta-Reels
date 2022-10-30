import '../styles/globals.css'
import '../pages/signup/signup.css'
import '../pages/login/login.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../pages/components/Feed.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
