import { useTheme, useThemeUpdate } from "../context/themeContext"

export function ModeToggle() {
    let darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    
    return (
        <div className="mode-toggle noSelect">
            <h4 className={darkTheme ? "mode-text inactive" : "mode-text"}>Light</h4>
            <div className={darkTheme ? "mode-outer-section dark" : "mode-outer-section light"} onClick={toggleTheme}>
                <div className={darkTheme ? "mode-inner-circle dark" : "mode-inner-circle light"}></div>
            </div>
            <h4 className={darkTheme ? "mode-text" : "mode-text inactive"}>Dark</h4>
        </div>
    )
}