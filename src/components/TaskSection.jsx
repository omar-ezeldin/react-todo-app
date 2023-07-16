import { useTasks } from "../context/taskContext"
import { useTheme } from "../context/themeContext"
import { Task } from "./Task"

export function TaskSection() {
    let darkTheme = useTheme()
    let tasks = useTasks()

    let taskElements = tasks.map(task => <Task title={task.title} isCompleted={task.isCompleted} />)

    return (
        <div className={darkTheme ? "task-section dark" : "task-section light"}>
            <h2 className={darkTheme ? "task-section-title dark" : "task-section-title light"}>Tasks</h2>
            {taskElements}
        </div>
    )
}