import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"


const Root = () => {
    return (
        <div>
            <Header />
            <main className="py-24 flex-1 bg-gray-400 dark:bg-gray-600">
                <Outlet />
            </main>
            <Footer />
        </div >
    )
}

export default Root