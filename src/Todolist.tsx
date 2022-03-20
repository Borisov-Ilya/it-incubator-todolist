import React, {useState, KeyboardEvent, ChangeEvent} from 'react'
import {FilterValuesType} from './App'
import {Button} from './components/Button'

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    tasksFilter: (filterValue: FilterValuesType) => void
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

    const changeFilterHandler = (filterValue: FilterValuesType) => {
        props.tasksFilter(filterValue)
    }
    const removeTaskHandler = (id: string) => {
        props.removeTask(id)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTitle}
                   onKeyPress={onKeyPressHandler}
                   onChange={onChangeHandler}
            />
            {/*<button onClick={addTaskHandler}>+</button>*/}
            <Button name={'+'} callback={addTaskHandler}/>
        </div>
        <ul>
            {props.tasks.map((el) => {
                return (
                    <li key={el.id}>
                        {/*<button onClick={() => removeTaskHandler(el.id)}>X</button>*/}
                        <Button name={'X'} callback={()=> removeTaskHandler(el.id)}/>
                        <input type='checkbox' checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
                )
            })}
        </ul>
        <div>
            <Button name={'all'} callback={() => changeFilterHandler('all')}/>
            <Button name={'active'} callback={() => changeFilterHandler('active')}/>
            <Button name={'completed'} callback={() => changeFilterHandler('completed')}/>
        </div>
    </div>
}
