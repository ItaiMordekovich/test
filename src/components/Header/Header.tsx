import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Navbar from "../Navbar/Navbar"
import './Header.scss'

const Header = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <header className="bg-teal-300 dark:bg-teal-600 text-black dark:text-white p-5 ">
            <Navbar />
        </header>
    )
}

export default Header