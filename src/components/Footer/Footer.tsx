import { NavLink } from "react-router-dom";
import "./Footer.scss";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { RiInformationFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { TbUserSquare } from "react-icons/tb";

const Footer = () => {
    const { isLoggedIn, isBiz } = useContext(AuthContext);


    return (
        <footer className="bg-teal-300 dark:bg-teal-600 text-black dark:text-white p-5">
            <nav className="footer-navbar flex justify-center  text-2xl">

                {!isLoggedIn && <NavLink to="/about" className="brand flex flex-col">
                    <RiInformationFill />
                    About
                </NavLink>}
                {isLoggedIn && <NavLink to="/about" className="brand mr-20 flex flex-col  ">
                    <RiInformationFill />
                    About
                </NavLink>}
                {isLoggedIn && <NavLink to="/favcards" className="brand mr-20 flex flex-col ">
                    <FaHeart />
                    Fav Cards
                </NavLink>}
                {isBiz &&
                    <div className=" flex">
                        <NavLink to="/mycards" className="brand">
                            <TbUserSquare />
                            My Cards
                        </NavLink>
                    </div>
                }

            </nav>
        </footer>
    );
};

export default Footer;















//     return (

//
//             Footer
//
//     )
// }

