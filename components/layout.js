import Footer from "Components/footer";

const Layout = ({children}) => {
    return (
        <>
            <div className="px-4 xl:px-80">{children}</div>
            <Footer/>
        </>
    )
}

export default Layout