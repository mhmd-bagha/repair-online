import Image from "next/image";
import {GoLocation} from "react-icons/go";
import Link from "next/link";
import {MdAlternateEmail} from "react-icons/md";
import {FiPhoneCall} from "react-icons/fi";
import {BsInstagram} from "react-icons/bs";

const Intro = () => {
    const symbols = [
        {title: 'اینماد', image: '/images/footer/enamad-symbol.png'},
        {title: 'اتاق اصناف ایران', image: '/images/footer/guilds-room.png'}
    ]

    return (
        <div className="grid grid-flow-row lg:grid-flow-col grid-cols-1 lg:grid-cols-2">
            {/* intro */}
            <div>
                <p className="text-sm text-white">تعمیرآنلاین دقیقا همونجایی هستش که برای حال خوب لوازم خونگی بهش
                    نیاز
                    داری! اینجا بخند، حتی وقتی لوازم خونگیت داغونه...</p>
                {/* symbols */}
                <div className="flex items-center gap-2 pt-4">
                    {symbols.map((symbol, index) => (
                        <Image src={symbol.image} alt={`نماد ${symbol.title}`} width={200} height={200}
                               className="w-16 h-16 bg-white rounded-md" key={index}/>))}
                </div>
            </div>
            {/* location and links */}
            <div className="mt-12 lg:mt-0">
                {/* location */}
                <div className="flex items-center text-white">
                    <GoLocation size={25}/>
                    <Link href="/" className="pr-3"> تهران، خیابان شریعتی ، نرسیده به پل سیدخندان، پلاک 874، نبش
                        کوچه اشراقی،
                        طبقه چهارم </Link>
                </div>
                {/* email */}
                <div className="flex items-center text-gray-100 mt-6">
                    <MdAlternateEmail size={25}/>
                    <Link href="mailto:example@example.com" className="pr-3">example@example.com</Link>
                </div>
                {/* tel-phone */}
                <div className="flex items-center text-gray-100 mt-6">
                    <FiPhoneCall size={25}/>
                    <Link href="tel:021-45396" className="pr-3">021-45396</Link>
                </div>
                {/* instagram */}
                <div className="flex items-center text-gray-100 mt-6">
                    <BsInstagram size={25}/>
                    <Link href="https://instagram.com/example" className="pr-3">tamironlinecom</Link>
                </div>
            </div>
        </div>
    )
}

export default Intro