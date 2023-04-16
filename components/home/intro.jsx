import Image from "next/image";
import IntroImage from 'Image/main/intro.jpg';
import Link from "next/link";
import {FiPhoneCall} from "react-icons/fi";
import styles from "Styles/Home.module.scss";

const Intro = () => {
    return (
        <>
            <div className="block lg:flex justify-between items-center mt-0 lg:mt-16 gap-4">
                {/*  intro logo  */}
                <div className="basis-11/12 grid place-items-center lg:place-items-stretch">
                    <Image src={IntroImage} alt='تصویر معرفی'
                           className="w-full md:w-8/12 xl:w-11/12 2xl:w-9/12 h-auto"/>
                </div>
                {/* intro text */}
                <div className="lg:basis-1/2 xl:basis-2/3 2xl:basis-1/2">
                    <p className="text-sm text-center lg:text-start text-gray-600"> در تعمیرآنلاین رضایت مشتری یک شعار
                        نیست.</p>
                    <p className="text-xl text-center lg:text-start text-gray-900 font-bold my-7 w-full lg:truncate">تعمیرآنلاین
                        |
                        تعمیرات تخصصی لوازم خانگی آبتین</p>
                    <p className="text-sm text-center lg:text-start text-gray-800 leading-8 my-7 flex">
                        {/* phone icon */}
                        <Link href="tel:021-45396" className="pl-2 lg:pl-4">
                            <FiPhoneCall size={18}
                                         className={`rotate-[200deg] color_default_blue ${styles.animate_phone}`}/>
                        </Link>
                        تعمیر آنلاین مرکز تخصصی نصب، آموزش و تعمیرات لوازم خانگی در ایران بوده و مجری تخصصی خدمات پس از
                        فروش برندهای مطرح جهان می‌باشد. وجه تمایز این مجموعه تاکید بر آموزش رایگان به صورت همگانی
                        می‌باشد. علاوه بر آن، گردآوری تیم تخصصی تعمیرات، استفاده از قطعات اصلی، ارائه فاکتور و گارانتی
                        رسمی است.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Intro