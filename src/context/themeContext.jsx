import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()
const ThemeUpdate = createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function useThemeUpdate() {
    return useContext(ThemeUpdate)
}

export function ThemeProvider({children}) {
    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme() {
        return setDarkTheme(prevTheme => !prevTheme)
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdate.Provider value={toggleTheme}>
                {children}
            </ThemeUpdate.Provider>
        </ThemeContext.Provider>
    )
}