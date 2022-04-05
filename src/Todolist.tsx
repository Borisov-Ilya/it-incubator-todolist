import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import style from './Todolist.module.css'
import {CheckBox} from "./components/CheckBox";
import {Button} from "./components/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeStatusCheckbox: (currentId: string, eventStatus: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim());
            setTitle("");
        } else {
            setError('Title is required')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    // const onAllClickHandler = () => props.changeFilter("all");
    // const onActiveClickHandler = () => props.changeFilter("active");
    // const onCompletedClickHandler = () => props.changeFilter("completed");



    const filterGlobalFoo=(value:FilterValuesType)=>{
          props.changeFilter(value)
    }

    const checkBoxHandler = (currentId: string, currentEvent: boolean) => {
        props.changeStatusCheckbox(currentId, currentEvent)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input className={error ? style.error : ''}
                   value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
        </div>
        {error && <div className={style.errorMessage}>{error}</div>}
        <ul>
            {
                props.tasks.map(t => {
                    // const checkBoxHandler = (currentEvent:boolean) => {
                    //     props.changeStatusCheckbox(t.id,currentEvent)
                    // }
                    const onClickHandler = () => props.removeTask(t.id)
                    return <li key={t.id} className={t.isDone ? style.isDone : ''}>
                        {/*<input type="checkbox" checked={t.isDone}*/}
                        {/*       onChange={checkBoxHandler}/>*/}
                        <CheckBox tIsDone={t.isDone} callBack={(currentEvent)=>checkBoxHandler(t.id,currentEvent)}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            {/*// было                        НЕ ИСПОЛЬЗОВАЛИ КОЛБЭК!!!!!!!!!!!!!!!!!!*/}
            <Button name={'all'} callBack={()=>filterGlobalFoo('all')} filter={props.filter}  />
            <Button name={'active'} callBack={()=>filterGlobalFoo('active')} filter={props.filter} />
            <Button name={'completed'} callBack={()=>filterGlobalFoo('completed')} filter={props.filter}/>

            {/*<button className={props.filter === 'all' ? style.activeFilter : ''} onClick={()=>filterGlobalFoo('all')}>All</button>*/}
            {/*<button className={props.filter === 'active' ? style.activeFilter : ''} onClick={()=>filterGlobalFoo('active')}>Active</button>*/}
            {/*<button className={props.filter === 'completed' ? style.activeFilter : ''} onClick={()=>filterGlobalFoo('completed')}>Completed</button>*/}

            {/*<button className={props.filter === 'all' ? style.activeFilter : ''} onClick={onAllClickHandler}>All</button>*/}
            {/*<button className={props.filter === 'active' ? style.activeFilter : ''} onClick={onActiveClickHandler}>Active</button>*/}
            {/*<button className={props.filter === 'completed' ? style.activeFilter : ''} onClick={onCompletedClickHandler}>Completed</button>*/}
        </div>
    </div>
}
