import Menu from "Components/home/menu";
import Intro from "Components/home/intro";
import ServicesOusWork from "Components/home/services-ous-work";
import ContactUs from "Components/home/contact-us";

const Home = () => {
    return (
        <>
            <Menu/>
            {/* Introduction */}
            <Intro/>
            {/* services ous work */}
            <ServicesOusWork/>
            {/* contact us */}
            <ContactUs/>
        </>
    )
}

export default Home