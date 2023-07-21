import { useTaskContext } from "../context/taskContext"
import { useTheme } from "../context/themeContext"

export function Task({id, title, isCompleted, selectedID, select}) {
    let darkTheme = useTheme()
    const [[_tasks, _currTaskID], [_setCurrTaskID, _addTask, editTask, _deleteTask], [_activeElements, setActiveElements]] = useTaskContext()
 
    const handleClick = (e) => {
        console.log(e)
        if(e.target.classList[0] == "task-checkbox") {
            editTask(id, "isCompleted", !isCompleted, true)
        }else if(e.target.nodeName == "svg" || e.target.nodeName == "path"){
            editTask(id, "isCompleted", !isCompleted)
        } else{
            setActiveElements({taskSection: false, editingSection: true})
            select(id)
        }
        
    }

    return(
        <div onClick={(e) => handleClick(e)} className={`task ${darkTheme ? "dark" : "light"} ${selectedID === id && "active"}`}>
            <div onClick={(e) => handleClick(e)} className={`task-checkbox ${darkTheme ? "dark" : "light"}`}><svg className={`checkmark ${isCompleted && "completed"} ${darkTheme ? "dark" : "light"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></div>
            <h3 className={`task-title ${isCompleted && "completed"}`}>{title === "" ? "Untitled Task" : title}</h3>
        </div>
    )
}