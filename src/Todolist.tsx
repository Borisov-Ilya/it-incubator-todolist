import React, {useState, KeyboardEvent, ChangeEvent} from 'react'

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    tasksFilter: (filterValue: string) => void
    removeTask: (id: string) => void
    addTask: (newTitle: string) => void
}


export function Todolist(props: PropsType) {
    let [newTitle, setNewTitle] = useState('')

    const addTaskHandler = () => {
        props.addTask(newTitle)
        setNewTitle('')
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const filterHandler = (filterValue: string) => {
        props.tasksFilter(filterValue)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTitle}
                   onKeyPress={onKeyPressHandler}
                   onChange={onChangeHandler}
            />
            <button onClick={addTaskHandler}>+</button>
        </div>
        <ul>
            {props.tasks.map((el) => {
                const removeTaskHandler = () => {
                    props.removeTask(el.id)
                }

                return (
                    <li key={el.id}>
                        <button onClick={removeTaskHandler}>X</button>
                        <input type='checkbox' checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
                )
            })}
        </ul>
        <div>
            <button onClick={() => filterHandler('All')}>All</button>
            <button onClick={() => filterHandler('Active')}>Active</button>
            <button onClick={() => filterHandler('Completed')}>Completed</button>
        </div>
    </div>
}
