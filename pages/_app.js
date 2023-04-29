import 'Styles/modules.css'
import 'Styles/globals.scss'
import Layout from "Components/layout";
import ReactGA from 'react-ga';

export default function App({ Component, pageProps }) {
    ReactGA.initialize('G-FBS3BR4DX3')

  return (
      <Layout>
          <Component {...pageProps} />
      </Layout>
  )
}
