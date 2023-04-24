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
        />
    )
}
export default Seo