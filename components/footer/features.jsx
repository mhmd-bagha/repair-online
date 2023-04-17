import styles from "Styles/Footer.module.scss";
import {FaCheck} from "react-icons/fa";

const Features = () => {
    const features = [
        {title: 'تعمیر لوازم خانگی در منزل مشتری'},
        {title: 'ضمانت نامه کتبی خدمات'},
        {title: 'دستگاه کارت خوان سیار'},
        {title: 'قیمت مناسب و ارزان'},
        {title: 'مشاوره رایگان'},
        {title: 'سرعت در خدمات'},
        {title: 'شفاف بودن هزینه ها'},
        {title: 'ارائه خدمات توسط متخصص تعمیرات'},
    ]

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-3 px-4 ${styles.footer_feature}`}>
            {features.map((feature, index) => (
                <div className="flex items-center my-5" key={index}>
                    <p className="p-2 bg_yellow rounded-full"><FaCheck className="text-white"/></p>
                    <p className="text-xs lg:text-sm text-gray-700 pr-4">{feature.title}</p>
                </div>
            ))}
        </div>
    )
}
export default Features