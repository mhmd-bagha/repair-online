import Link from "next/link";
import {BsInstagram} from "react-icons/bs";
import {BiSupport} from "react-icons/bi";

const RuleCopyright = () => {
    return (
        <div
            className="block lg:flex justify-between items-center bg_prussian_blue rounded-t-3xl py-3 px-4 lg:py-5 lg:px-10 mt-9 mb-3 relative top-11 lg:top-16">
            <p className="text-gray-100">تمام حقوق مادی و معنوی این وب سایت متعلق به تعمیر آنلاین می باشد.</p>
            {/* support */}
            <div className="flex justify-center items-center mt-4 lg:mt-0">
                {/* instagram */}
                <div className="flex items-center">
                    <Link href="https://instagram.com/example"
                          className="pl-3 text-white color_yellow_hover transition-all duration-300">tamironlinecom</Link>
                    <BsInstagram size={30} className="color_default_blue color_yellow_hover"/>
                </div>
                {/* line */}
                <span className="px-5 text-gray-100">|</span>
                {/* support */}
                <div className="flex items-center">
                    <Link href="tel:021-45396"
                          className="pl-3 color_yellow hover:text-white transition-all duration-300">021-45396</Link>
                    <BiSupport size={30} className="text-white"/>
                </div>
            </div>
        </div>
    )
}

export default RuleCopyright