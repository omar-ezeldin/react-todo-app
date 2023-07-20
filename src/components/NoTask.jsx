import { useTheme } from "../context/themeContext"

export function NoTask() {
    let darkTheme = useTheme()

    return (
        <div className={`notask-container ${darkTheme ? "dark" : "light"}`}>
            <h2>Add a task from the (+) sign</h2>
        </div>
    )
}