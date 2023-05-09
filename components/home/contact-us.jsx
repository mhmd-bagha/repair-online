import {BsTelephoneFill} from "react-icons/bs";
import styles from 'Styles/Home.module.scss';
import {SupportNumber, supportNumberMobile} from "@/helpers/supportNumber";

const ContactUs = () => {
    return (
        <>
            <SupportNumber className="flex justify-center items-center gap-x-3 fixed bottom-5 left-5 z-10">
                <p className="p-2 bg_cultured rounded-md hidden md:block">{supportNumberMobile()}</p>
                <p className="p-3 bg-green-600 rounded-full"><BsTelephoneFill className={`text-white ${styles.animate_phone}`}/></p>
            </SupportNumber>
        </>
    )
}

export default ContactUs