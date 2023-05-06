import {NextSeo} from "next-seo";
import {useRouter} from "next/router";

const Seo = () => {
    const router = useRouter()
    const isServer = typeof window === 'undefined';
    const mainUrl = isServer ? '' : `${window.location.protocol}//${window.location.host}${router.basePath}`;
    const title = 'تعمیر آبتین | تعمیرات تخصصی لوازم خانگی آبتین'
    const description = 'مرکز تخصصی تعمیرات لوازم خانگی آنلاین ابتین، انواع برندهای داخلی و خارجی با بهترین متخصصین و تعمیرکاران + فروش قطعات'

    return (
        <NextSeo
            title={title}
            description={description}
            canonical={mainUrl}
            openGraph={{
                url: mainUrl,
                siteName: title
            }}
            additionalMetaTags={[{
                name: 'keywords',
                content: 'تعمیر ماکروفر آبتین, تعمیر آبگرمکن خانگی آبتین, تعمیر هود آبتین, تعمیر توستر آبتین, تعمیر گاز رو میزی آبتین, تعمیر اجاق گاز خانگی آبتین, تعمیر پکیج آبگرمکن آبتین, خدمات تعمیر لوازم خانگی آبتین, تعمیر کلیه لوازم خانگی در آبتین, تعمیرگاه لوازم خانگی آبتین, تعمیرکار لوازم خانگی در آبتین, خدمات تعمیر آبگرمکن در آبتین'
            }]}
        />
    )
}
export default Seo