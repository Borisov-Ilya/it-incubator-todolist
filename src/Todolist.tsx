import React from "react";

type TasksType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    task: Array<TasksType>
    removeTask: (id: number) => void
    tasksFilter: (filterValue: string) => void
}

export const Todolist = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.task.map(el => {
                    return (
                        <li key={el.id}>
                            <button onClick={() => props.removeTask(el.id)}>x</button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => props.tasksFilter("All")}>All</button>
                <button onClick={() => props.tasksFilter("Active")}>Active</button>
                <button onClick={() => props.tasksFilter("Completed")}>Completed</button>
            </div>
        </div>
    )
}

