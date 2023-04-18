import Image from "next/image";
import styles from "Styles/Home.module.scss";

const ServicesOusWork = () => {
    const services = [
        {title: 'ماکروفر', image: '/images/main/services/microwave.png'},
        {title: 'اجاق گاز', image: '/images/main/services/gas.png'},
        {title: 'هود', image: '/images/main/services/hood.png'},
        {title: 'توستر', image: '/images/main/services/toaster.png'},
        {title: 'گاز رومیزی', image: '/images/main/services/table-gas.png'},
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