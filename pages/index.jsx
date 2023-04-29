import Menu from "Components/home/menu";
import Intro from "Components/home/intro";
import ServicesOusWork from "Components/home/services-ous-work";
import ContactUs from "Components/home/contact-us";
import Seo from "Components/home/seo";
import ReactGA from 'react-ga';

const Home = () => {
    const isServer = typeof window === 'undefined';
    const mainUrl = isServer ? '' : window.location.pathname + window.location.search;
    ReactGA.pageview(mainUrl)

    return (
        <>
            <Menu/>
            {/* Introduction */}
            <Intro/>
            {/* services ous work */}
            <ServicesOusWork/>
            {/* contact us */}
            <ContactUs/>
            {/* seo */}
            <Seo/>
        </>
    )
}

export default Home