import {HiBars3} from "react-icons/hi2";
import {useEffect, useMemo, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import useDeviceWidth from "@/helpers/devices-width";
import {VscChromeClose} from "react-icons/vsc";
import styles from 'Styles/Home.module.scss'
import {BsDot} from "react-icons/bs";

const Menu = () => {
    const [openMenu, setOpenMenu] = useState(undefined)
    // Get use device user
    const {getDevice} = useDeviceWidth()
    // Change show class menu form status state
    const activeMenuClass = useMemo(() => {
        switch (openMenu) {
            case true:
                return 'right-0 left-0';
            case false:
                return 'right-[999px]';
            default:
                return '';
        }
    }, [openMenu]);

    useEffect(() => {
        // Set openMenu based on device width
        (getDevice() === 'sm' || getDevice() === 'md') ? setOpenMenu(false) : setOpenMenu(undefined)
    }, [getDevice])

    return (
        <>
            <div className="flex justify-between items-center relative lg:hidden py-3 px-4">
                {/* open button */}
                <Image src='/images/header/online-repair-logo.jpg' alt="logo" className="w-16 h-auto rounded-full" width={200} height={200}/>
                <button onClick={() => setOpenMenu(true)}>
                    <HiBars3 size={25} className="color-gunmetal"/>
                </button>
            </div>
            <div
                className={`bg-white fixed top-0 bottom-0 z-10 lg:relative lg:flex items-center justify-between py-3 px-4 lg:px-5 transition-all duration-500 ease-in-out ${activeMenuClass}`}>
                {/* header */}
                <div className="flex justify-between items-center">
                    <Image src='/images/header/online-repair-logo.jpg' alt="logo" className="w-16 h-auto rounded-full" width={200} height={200}/>
                    {/* close button */}
                    <button className="block lg:hidden float-right" onClick={() => setOpenMenu(false)}>
                        <VscChromeClose size={25} className="color-gunmetal"/>
                    </button>
                </div>
                {/* links */}
                <div className="block lg:flex text-start justify-center items-center gap-5 mt-10 lg:mt-0 px-4">
                    <Link href="/" className={`py-1 lg:py-0 ${styles.menu_link}`}>خانه</Link>
                    <Link href="/about-us" className={`py-1 lg:py-0 ${styles.menu_link}`}>درباره ما</Link>
                    <Link href="/contact-us" className={`py-1 lg:py-0 ${styles.menu_link}`}>تماس با ما</Link>
                </div>
            </div>
            {/* search bar !(now disabled) */}
            <div className={`py-6 xl:py-0 px-3 lg:px-0 justify-end ${styles.search_box}`}>
                {/* search icon */}
                <p className={styles.search_icon}/>
                <input type="text"
                       className="py-1.5 w-full lg:w-1/1 2xl:w-1/3 pr-12 shadow-md border outline-none border-white rounded-full bg_cultured"
                       placeholder="چه کمکی از دست ما برمیاد؟" disabled={true}/>
                {/* dot icon */}
                <BsDot size={27} className="relative left-7 color_yellow"/>
            </div>
        </>
    )
}

export default Menu