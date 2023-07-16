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
    const [darkTheme, setDarkTheme] = useState(JSON.parse(localStorage.getItem('theme')) || false)

    function toggleTheme() {
        return setDarkTheme(prevTheme => {
            let currTheme = !prevTheme
            localStorage.setItem("theme", JSON.stringify(currTheme))
            return currTheme
        })
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdate.Provider value={toggleTheme}>
                {children}
            </ThemeUpdate.Provider>
        </ThemeContext.Provider>
    )
}