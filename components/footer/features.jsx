import styles from "Styles/Footer.module.scss";
import Image from "next/image";

const Features = () => {
    const features = [
        {title: 'پشتیبانی همه جانبه', image: '/images/footer/support.png'},
        {title: 'تکنسین های مجرب و بااخلاق', image: '/images/footer/technician.png'},
        {title: '6 ماه ضمانت خدمات', image: '/images/footer/warranty.png'},
        {title: 'سرعت بالای خدمات', image: '/images/footer/top-speed.png'},
    ]

    return (
        <div className={`block lg:flex justify-between items-center py-3 px-4 ${styles.footer_feature}`}>
            {features.map((feature, index) => (
                <div className="flex items-center my-5" key={index}>
                    <Image src={feature.image} alt={feature.title} width={28} height={28}/>
                    <p className="text-xs lg:text-sm text-gray-700 pr-4">{feature.title}</p>
                </div>
            ))}
        </div>
    )
}
export default Features