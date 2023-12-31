import { useTaskContext } from "../context/taskContext"
import { useTheme } from "../context/themeContext"
import { Task } from "./Task"

export function TaskSection() {
    let darkTheme = useTheme()
    const [[tasks, currTaskID], [setCurrTaskID, addTask], [activeElements, setActiveElements]] = useTaskContext()

    let taskElements = tasks.map(task => {
        return <Task 
            key={task.id}
            title={task.title} 
            id={task.id}
            isCompleted={task.isCompleted} 
            selectedID={currTaskID}
            select={setCurrTaskID}
        />
    })

    return (
        <div className={`task-section ${darkTheme ? "dark" : "light"} ${activeElements.taskSection ? "active" : "inactive"}`}>
            <div className="task-section-header">
                <h2 className={`task-section-title ${darkTheme ? "dark" : "light"}`}>Tasks</h2>
                <svg onClick={addTask} className={`plus ${darkTheme ? "dark" : "light"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
            </div>
            {taskElements}
        </div>
    )
}