import Image from "next/image";
import IntroImage from 'Image/main/intro.jpg';

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
                    <p className="text-sm text-center lg:text-start text-gray-600">رضایت شما اعتبار ماست</p>
                    <p className="text-xl text-center lg:text-start text-gray-900 font-bold my-7 w-full lg:truncate">تعمیرآنلاین
                        |
                        تعمیرات تخصصی لوازم خانگی آبتین</p>
                    <p className="text-sm text-center lg:text-start text-gray-800 leading-8 my-7">
                        ما از سال 1392 سعادت خدمت به مشتریان عزیزمان را در زمینه ی نصب و تعمیرات لوازم خانگی خارجی و ایرانی اغمم از«اجاق گاز .هود.فر.ماکرو.سولاردوم.توستر»را دریافت نموده ایم ورضایت مندی مشتریان را الویت خود قرارداده ایم وهدف ما ارائه ی خدمات مذکور جلب اعتمادشماست»
                    </p>
                </div>
            </div>
        </>
    )
}

export default Intro