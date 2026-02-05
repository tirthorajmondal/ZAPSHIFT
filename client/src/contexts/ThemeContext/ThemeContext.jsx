import { createContext } from "react";

export const ThemeContext = createContext(null)

const ThemeContext = ({ children }) => {
    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider >
    );
};

export default ThemeContext;