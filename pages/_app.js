import 'Styles/modules.css'
import 'Styles/globals.scss'
import Layout from "Components/layout";

export default function App({ Component, pageProps }) {
  return (
      <Layout>
          <Component {...pageProps} />
      </Layout>
  )
}
