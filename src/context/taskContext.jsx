import { createContext, useContext, useEffect, useState } from "react";
import sound from '/completion.m4a?url';


const TaskContext = createContext()

export function useTaskContext() {
    return useContext(TaskContext)
}

export function TasksProvider({children}) {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || (() => {
        localStorage.setItem("tasks", JSON.stringify([]))
        return []
    }))
    const [currTaskID, setCurrTaskID] = useState(tasks.length === 0 ? null : tasks[0].id)  

    useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)), [tasks])

    function addTask() {
        setTasks(prevTasks => {
            let newTodo = {
                id: crypto.randomUUID(),
                title: "Untitled Task",
                description: "",
                isCompleted: false
            }
            let tasks = [
                newTodo,
                ...prevTasks
            ]
            setCurrTaskID(newTodo.id)
            return tasks
        })
    }

    function editTask(id, property, value) {
        if(property == "isCompleted" && value) {
            new Audio(sound).play()
        }

        setTasks(prevTasks => {
            return prevTasks.map(task => {
                if (task.id === id) {
                    return {
                        ...task,
                        [property]: value,
                    }
                }
                return task
            })
        })
    }

    function deleteTask(id) {
        setCurrTaskID(() => {
            if (tasks.length === 1) {
                return null
            }else if(id === tasks[0].id) {
                return tasks[1].id
            }else {
                return tasks[0].id
            }
        })
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
    }

    return (
        <TaskContext.Provider value={[[tasks, currTaskID], [setCurrTaskID, addTask, editTask, deleteTask]]}>
            {children}
        </TaskContext.Provider>
    )
}
