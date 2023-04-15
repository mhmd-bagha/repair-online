import Menu from "Components/home/menu";
import Intro from "Components/home/intro";
import ServicesOusWork from "Components/home/services-ous-work";

const Home = () => {
    return (
        <>
            <Menu/>
            {/* Introduction */}
            <Intro/>
            {/* services ous work */}
            <ServicesOusWork/>
        </>
    )
}

export default Home