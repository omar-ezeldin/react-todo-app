import { useTheme, useThemeUpdate } from "../context/themeContext"
import { ModeToggle } from "./modeToggle"

export function Header() {

    let darkTheme = useTheme()

    return (
        <nav className={darkTheme ? "dark" : "light"}>
            <h3 className="nav-sub-title">React - Project 1</h3>
            <h1 className="nav-title">To-do App</h1>
            <ModeToggle />
        </nav>
    )
}