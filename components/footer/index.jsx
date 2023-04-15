import Features from "Components/footer/features";
import styles from "Styles/Footer.module.scss";
import Intro from "Components/footer/intro";
import RuleCopyright from "Components/footer/rule-copyright";

const Footer = () => {

    return (<>
        {/* features */}
        <Features/>
        {/**/}
        <div className={`py-8 lg:py-14 px-4 lg:px-10 xl:px-36 2xl:px-40 ${styles.footer}`}>
            {/* intro and symbols */}
            <Intro/>
            {/* rule copyright */}
            <RuleCopyright/>
        </div>
    </>)
}

export default Footer