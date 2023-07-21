import { useTheme } from "../context/themeContext"
import { useTaskContext } from "../context/taskContext"


export function NoTask() {
    let darkTheme = useTheme()
    const [[_tasks, _currTaskID], [_setCurrTaskID, addTask], [activeElements, _setActiveElements]] = useTaskContext()


    return (
        <div onClick={addTask} className={`notask-container ${darkTheme ? "dark" : "light"} ${activeElements.editingSection ? "active" : "inactive"}`}>
            <h2>Click Anywhere Here to Add a Task</h2>
        </div>
    )
}