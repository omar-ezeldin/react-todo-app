import { useTheme } from "../context/themeContext"

export function EditingSection() {
    let darkTheme = useTheme()
    let trash = <svg className={`trash ${darkTheme ? "dark" : "light"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
    let checkmark = <svg className={`checkmark`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>


    return (
        <div className={`editing-section ${darkTheme ? "dark" : "light"}`}>
            <div className={`editing-section-header ${darkTheme ? "dark" : "light"}`}>
                <h1 className="editing-section-title">Task 1</h1>
                {trash}
            </div>
            <div className="editing-section-body">
                <div className="input-group title">
                    <label htmlFor="title">Title:</label>
                    <input className={darkTheme ? "dark" : "light"} id="title" type="text" />
                </div>
                <div className="input-group completed">
                    <label>Completed:</label>
                    <div className={`checkbox ${darkTheme ? "dark" : "light"}`}>{checkmark}</div>
                </div>
                <div className="input-group description">
                    <label htmlFor="description">Description:</label>
                    <textarea className={darkTheme ? "dark" : "light"} id="description"></textarea>
                </div>
            </div>
        </div>
    )
}