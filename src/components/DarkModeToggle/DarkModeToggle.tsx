import { useContext } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { ThemeContext } from "../../contexts/ThemeContext";

const DarkModeToggle = () => {
    const { theme, toggle } = useContext(ThemeContext);

    return (

        <button
            onClick={toggle}>
            {theme === "light" ? <BsFillMoonStarsFill /> : <FiSun />}
        </button>

    );
};

export default DarkModeToggle;
