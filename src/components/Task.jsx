import { useTheme } from "../context/themeContext"

export function Task(props) {
    const checkmark = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
    let darkTheme = useTheme()
    let {title, isCompleted} = props

    return(
        <div className={`task ${darkTheme ? "dark" : "light"}`}>
            <div className={`task-checkbox ${darkTheme ? "dark" : "light"}`}><svg className={`checkmark ${isCompleted && "completed"} ${darkTheme ? "dark" : "light"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></div>
            <h3 className={`task-title ${isCompleted && "completed" }`}>{title}</h3>
        </div>
    )
}