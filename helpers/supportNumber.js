import Link from "next/link";

const number = '09190236271'

export const SupportNumber = ({className, children}) => {
    return (
        <Link href={`tel:${number}`} className={className}>{children}</Link>
    )
}

export const supportNumberMobile = () => number