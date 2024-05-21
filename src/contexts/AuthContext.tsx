import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { JwtDecodeType } from "../@types/types";

export const AuthContext = createContext({
    isLoggedIn: false,
    isBiz: false,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    login: (jwt: string) => { },
    logout: () => { },
});

export const AuthContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isBiz, setBiz] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
            const decoded: JwtDecodeType = jwtDecode(token);
            setBiz(decoded.isBusiness)
        }
    }, []);

    const login = (jwt: string) => {
        setIsLoggedIn(true);
        const decoded: JwtDecodeType = jwtDecode(jwt);
        setBiz(decoded.isBusiness)
        localStorage.setItem("token", jwt);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setBiz(false);
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, isBiz }}>
            {children}
        </AuthContext.Provider>
    );
};
