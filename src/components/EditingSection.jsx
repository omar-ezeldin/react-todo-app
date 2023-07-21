import { useTaskContext } from "../context/taskContext"
import { useTheme } from "../context/themeContext"
import { NoTask } from "./NoTask"

export function EditingSection() {
    let darkTheme = useTheme()
    let trash = <svg onClick={() => deleteTask(currTaskID)} className={`trash ${darkTheme ? "dark" : "light"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
    
    const [[tasks, currTaskID], [_setCurrTaskID, _addTask, editTask, deleteTask], [activeElements, setActiveElements]] = useTaskContext()
    const [currTask] = tasks.filter(task => task.id === currTaskID ? task : null)
    
    if(tasks.length === 0) return <NoTask />

    return (
        <div className={`editing-section ${darkTheme ? "dark" : "light"} ${activeElements.editingSection ? "active" : "inactive"}`}>
            <div className={`editing-section-header ${darkTheme ? "dark" : "light"}`}>
            <svg onClick={() => setActiveElements({taskSection: true, editingSection: false})} className={`back-arrow ${darkTheme ? "dark" : "light"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                <h1 className="editing-section-title">{currTask.title === "" ? "Untitled Task" : currTask.title}</h1>
                {trash}
            </div>
            <div className="editing-section-body">
                <div className="input-group title">
                    <label htmlFor="title">Title:</label>
                    <input onChange={(e) => editTask(currTaskID, "title", e.target.value)} value={currTask.title} className={darkTheme ? "dark" : "light"} id="title" type="text" />
                </div>
                <div className="input-group completed">
                    <label>Completed:</label>
                    <div onClick={() => editTask(currTaskID, "isCompleted", !currTask.isCompleted, true)} className={`checkbox ${darkTheme ? "dark" : "light"}`}>
                        <svg className={`checkmark ${currTask.isCompleted && "active"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    </div>
                </div>
                <div className="input-group description">
                    <label htmlFor="description">Description:</label>
                    <textarea onChange={(e) => editTask(currTaskID, "description", e.target.value)} value={currTask.description} className={darkTheme ? "dark" : "light"} id="description"></textarea>
                </div>
            </div>
        </div>
    )
}