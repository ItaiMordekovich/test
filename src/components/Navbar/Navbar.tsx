import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useSearch } from "../../contexts/SearchContext";
import { FaSearch } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {

    const { isLoggedIn, logout, isBiz } = useContext(AuthContext);
    const navigate = useNavigate();
    const { searchTerm, setSearchTerm } = useSearch();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(menuOpen => !menuOpen);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <nav className="site-navbar flex flex-row">
            <div className="nav-left flex flex-row">
                <button className="burger-icon" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <div className={`menu-links ${menuOpen ? "open" : ""}`}>
                    <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
                        Home |
                    </NavLink>
                    {!isLoggedIn && <NavLink to="/about" className="brand" onClick={() => setMenuOpen(false)}>
                        About
                    </NavLink>}
                    {isLoggedIn && <NavLink to="/about" className="brand">
                        About |
                    </NavLink>}
                    {isLoggedIn && <NavLink to="/favcards" className="brand" onClick={() => setMenuOpen(false)}>
                        Fav Cards |
                    </NavLink>}
                    {isBiz && <NavLink to="/mycards" className="brand" onClick={() => setMenuOpen(false)}>
                        My Cards |
                    </NavLink>}
                    {isBiz && <NavLink to="/newCard" className="brand" onClick={() => setMenuOpen(false)}>
                        Create Card
                    </NavLink>}
                </div>
            </div>
            <div className="nav-center-and-right flex">
                <div className="nav-center flex items-center mr-10">
                    <input id="searchInput" className="text-black rounded-xl border border-black w-80"
                        type="text"
                        placeholder="Search cards..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <FaSearch className="text-gray-500 dark:text-gray-400 ml-2" />
                </div>

                <div className="nav-right flex items-center mr-5">
                    {!isLoggedIn && <NavLink to="/register">Register </NavLink>}
                    {!isLoggedIn && <NavLink to="/login">Login </NavLink>}

                    {isLoggedIn && (
                        <button
                            onClick={() => {
                                logout();
                                navigate("/login");
                            }}
                        >
                            Logout
                        </button>
                    )}
                    <div className="ml-5">
                        <DarkModeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
