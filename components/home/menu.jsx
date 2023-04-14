import {HiBars3} from "react-icons/hi2";
import {useEffect, useMemo, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import useDeviceWidth from "@/helpers/devices-width";
import {VscChromeClose} from "react-icons/vsc";
import styles from 'Styles/Home.module.scss'

const Menu = () => {
    const [openMenu, setOpenMenu] = useState(undefined)
    // Get use device user
    const {getDevice} = useDeviceWidth()
    // Change show class menu form status state
    const activeMenuClass = useMemo(() => {
        switch (openMenu) {
            case true:
                return 'left-0 right-0';
            case false:
                return 'left-full';
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
                <Image src='/online-repair.png' alt="logo" className="w-36 h-auto" width={200} height={200}/>
                <button onClick={() => setOpenMenu(true)}>
                    <HiBars3 size={25} className="color-gunmetal"/>
                </button>
            </div>
            <div
                className={`bg-white fixed top-0 bottom-0 z-10 lg:relative lg:flex items-center justify-between py-3 px-4 lg:px-5 transition-all duration-500 ease-in-out ${activeMenuClass}`}>
                {/* header */}
                <div className="flex justify-between items-center">
                    <Image src='/online-repair.png' alt="logo" className="w-36 h-auto" width={200} height={200}/>
                    {/* close button */}
                    <button className="block lg:hidden float-right" onClick={() => setOpenMenu(false)}>
                        <VscChromeClose size={25} className="color-gunmetal"/>
                    </button>
                </div>
                <div className="block lg:flex text-end justify-center items-center gap-5 mt-10 lg:mt-0 px-4">
                    <Link href="/" className={`py-1 lg:py-0 ${styles.menu_link}`}>خانه</Link>
                    <Link href="/about-us" className={`py-1 lg:py-0 ${styles.menu_link}`}>درباره ما</Link>
                    <Link href="/contact-us" className={`py-1 lg:py-0 ${styles.menu_link}`}>تماس با ما</Link>
                </div>
            </div>
        </>
    )
}

export default Menu