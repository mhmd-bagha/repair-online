import {BsTelephoneFill} from "react-icons/bs";
import Link from "next/link";

const ContactUs = () => {
    return (
        <>
            <Link href="tel:02154837" className="flex justify-center items-center gap-x-3 fixed bottom-5 left-5 z-10">
                <p className="p-2 bg_cultured rounded-md hidden md:block">02154837</p>
                <p className="p-3 bg_default_blue rounded-full"><BsTelephoneFill className="text-white"/></p>
            </Link>
        </>
    )
}

export default ContactUs