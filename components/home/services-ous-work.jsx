import Image from "next/image";
import styles from "Styles/Home.module.scss";

const ServicesOusWork = () => {
    const services = [
        {title: 'لباسشویی', image: '/images/main/services/repair-laundry.png'},
        {title: 'ظرفشویی', image: '/images/main/services/dish-washing.png'},
        {title: 'جاروبرقی', image: '/images/main/services/vacuum-cleaner.png'},
        {title: 'گاز رومیزی', image: '/images/main/services/table-gas.png'},
        {title: 'یخچال و ساید', image: '/images/main/services/fridge-side.png'},
        {title: 'ماکروفر', image: '/images/main/services/microwave.png'},
        {title: 'جاروشارژی', image: '/images/main/services/vacuum-cleaner2.png'},
        {title: 'اوتو', image: '/images/main/services/iron.png'},
        {title: 'قهوه ساز', image: '/images/main/services/coffee-maker.png'},
        {title: 'چای ساز', image: '/images/main/services/tea-maker.png'},
        {title: 'سایر لوازم خانگی', image: '/images/main/services/other.png'},
    ]

    return (
        <>
            <div
                className="grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl::grid-cols-5 2xl:grid-cols-7 gap-6 2xl:gap-4 bg_cultured shadow-md rounded-3xl py-4 px-5 lg:px-10 my-10 mb-16">
                {services.map((service, index) => (
                    <div className={`w-28 ${styles.services_ous_work}`} key={index}>
                        <Image src={service.image} alt={service.title} width={80} height={80}
                               className={styles.hover_image}/>
                        <p className={styles.hover_dot}/>
                        <p className={`text-sm font-bold mt-2 truncate ${styles.hover_title}`}>تعمیر {service.title}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ServicesOusWork