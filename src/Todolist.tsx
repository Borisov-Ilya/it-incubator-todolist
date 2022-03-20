import React, {useState, KeyboardEvent, ChangeEvent} from 'react'
import {FilterValuesType} from './App'
import {Button} from './components/Button'
import {FullInput} from './components/FullInput'
import {Input} from './components/Input'

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

    const changeFilterHandler = (filterValue: FilterValuesType) => {
        props.tasksFilter(filterValue)
    }
    const removeTaskHandler = (id: string) => {
        props.removeTask(id)
    }
    const addTaskHandler = () => {
        props.addTask(newTitle)
        setNewTitle('')
    }

    return <div>
        <h3>{props.title}</h3>
        <Input title={newTitle} setTitle={setNewTitle} callback={addTaskHandler}/>
        <Button name={'+'} callback={addTaskHandler}/>
        {/*<FullInput callback={props.addTask}/>*/}
        <ul>
            {props.tasks.map((el) => {
                return (
                    <li key={el.id}>
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
